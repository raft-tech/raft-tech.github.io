import xlsx from "node-xlsx"
import fs from "fs"

/**
 * Helper functions
 */

// Count an occurrence of a `key` in the given `object`
const increment = (object, key) => {
  if (!key || key === "N/A") return // Verify there's data to track
  if (!object[key]) object[key] = 1 // Initialize tracking
  else object[key] = object[key] + 1 // Increment recurring key
}

// Check if column label matches target string
const isColumnMatch = (target) => (columnVal) =>
  columnVal.toLowerCase().trim() === target

/**
 * Generation
 */
const personToState = {} // Track each person once

//Track Person => State for Raft employees
const projectRosters = xlsx.parse(`./Program Team Roster.xlsx`)
projectRosters.forEach((project) => {
  let columns = null

  project.data.forEach((row) => {
    if (!columns) {
      // Determine column positions (if this is a header row)
      const state = row.findIndex(isColumnMatch("hor state"))
      if (state < 0) return // Not a header row

      const company = row.findIndex(isColumnMatch("company"))
      const name = row.findIndex(isColumnMatch("name"))

      columns = { state, company, name }
    } else {
      const name = row[columns.name]
      const state = row[columns.state]
      const company = row[columns.company]

      // Only track Raft employees.  If no company listed, assume they're Raft.
      if (company && company.toLowerCase() !== "raft") return

      if (!state || !name) return // Not enough info

      // Track each person once
      personToState[name.trim()] = state.trim().toUpperCase()
    }
  })

  columns = null // Reset for next project
})

// # of employees in each state
const countByState = {}
Object.values(personToState).forEach((_state) =>
  increment(countByState, _state)
)

// Sort by quantity (in case this ordering helps determine choropleth color scale)
const sortedByCount = []
for (let state in countByState) {
  sortedByCount.push([state, countByState[state]])
}
sortedByCount.sort(function (a, b) {
  return b[1] - a[1]
})

// Generate map source data (CSV)
const shortcodeToFipsStr = '{"AL":"01","AK":"02","AS":"60","AZ":"04","AR":"05","BI":"81","CA":"06","CO":"08","CT":"09","DE":"10","DC":"11","FL":"12","FM":"64","GA":"13","GU":"66","HI":"15","ID":"16","IL":"17","IN":"18","IA":"19","JI":"86","JA":"67","KS":"20","KY":"21","KR":"89","LA":"22","ME":"23","MH":"68","MD":"24","MA":"25","MI":"26","MN":"27","MS":"28","MO":"29","MT":"30","NI":"76","NE":"31","NV":"32","NH":"33","NJ":"34","NM":"35","NY":"36","NC":"37","ND":"38","MP":"69","OH":"39","OK":"40","OR":"41","PW":"70","PA":"42","PR":"72","RI":"44","SC":"45","SD":"46","TN":"47","TX":"48","UM":"74","UT":"49","VT":"50","VA":"51","VI":"78","WA":"53","WV":"54","WI":"55","WY":"56","NA":"00"}'
const stateCode2NameStr = '{"AL":"ALABAMA","AK":"ALASKA","AZ":"ARIZONA","AR":"ARKANSAS","CA":"CALIFORNIA","CO":"COLORADO","CT":"CONNECTICUT","DE":"DELAWARE","DC":"DISTRICT OF COLUMBIA","FL":"FLORIDA","GA":"GEORGIA","HI":"HAWAII","ID":"IDAHO","IL":"ILLINOIS","IN":"INDIANA","IA":"IOWA","KS":"KANSAS","KY":"KENTUCKY","LA":"LOUISIANA","ME":"MAINE","MD":"MARYLAND","MA":"MASSACHUSETTS","MI":"MICHIGAN","MN":"MINNESOTA","MS":"MISSISSIPPI","MO":"MISSOURI","MT":"MONTANA","NE":"NEBRASKA","NV":"NEVADA","NH":"NEW HAMPSHIRE","NJ":"NEW JERSEY","NM":"NEW MEXICO","NY":"NEW YORK","NC":"NORTH CAROLINA","ND":"NORTH DAKOTA","OH":"OHIO","OK":"OKLAHOMA","OR":"OREGON","PA":"PENNSYLVANIA","PR":"PUERTO RICO","RI":"RHODE ISLAND","SC":"SOUTH CAROLINA","SD":"SOUTH DAKOTA","TN":"TENNESSEE","TX":"TEXAS","UT":"UTAH","VT":"VERMONT","VA":"VIRGINIA","WA":"WASHINGTON","WV":"WEST VIRGINIA","WI":"WISCONSIN","WY":"WYOMING"}'

const shortcodeToFips = JSON.parse(shortcodeToFipsStr)
const stateCode2Name = JSON.parse(stateCode2NameStr)

let csv = "State,Name,FIPS,Count\n"

sortedByCount.forEach(([abbr, value]) => {
  csv += `${abbr},${stateCode2Name[abbr]},${shortcodeToFips[abbr]},${value}\n`
})

fs.writeFileSync("./map-source-data.csv", csv.trim(), "utf-8")