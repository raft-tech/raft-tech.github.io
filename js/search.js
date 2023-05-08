---
---
{%- assign pages = site.posts | where_exp: "p", "p.layout != nil" -%}

const pages = [
  {%- for p in pages %}
    {
      "title": {{ p.title | jsonify }},
      "content": {{ p.content | markdownify | strip_html | jsonify }},
      "url": {{ p.url | jsonify }},
      "excerpt": {{ p.excerpt | markdownify | strip_html | jsonify }}
    }
    {%- unless forloop.last %},{% endunless -%}
  {% endfor %}
]

// Generate search index

const index = elasticlunr(function () {
    this.addField('title');
    this.addField('content');
    this.addField('excerpt');
    this.addField('url');
    this.setRef('title')
});

// Add pages to index

pages.forEach(page => {
    index.addDoc(page);
});

// Define the search input and results
const searchInput = document.getElementById("search-input");

const searchResultsLength = document.getElementById("search-results-length");

const searchBox = document.getElementById("search-box");

const searchResults = document.getElementById("search-results");

const searchButton = document.getElementById("search-button");

const lightThemeButton = document.querySelector(".light-theme-btn");

const darkThemeButton = document.querySelector(".dark-theme-btn");

const body = document.body;

const content = document.getElementById("content");

const footer = document.getElementById("footer");

const hamburger = document.getElementById("hamburger");

const nav = document.getElementById("nav");

// HTML template for search results
const resultsHTMLTemplate = (result) => {
    // console.log(result)
    const template = ['<div class="search-result col-lg-6 offset-lg-3 col-md-12 offset-md-0">',
'<a href="' + result.doc.url + '">' + result.doc.title + '</a>',
'<p>' + result.doc.excerpt + '</p>',
'</div>'].join("");
searchResults.innerHTML += template;
}

// HTML template for search results
const noResultsHTMLTemplate = (term) => {
    // console.log(result)
    const template = ['<div class="search-result col-lg-6 offset-lg-3 col-md-12 offset-md-0">',
'<p>No results found for ' + term + '</p>',
'</div>'].join("");
searchResults.innerHTML += template;
}

// reset search fields
const resetSearchFields = (resetInput) => {
    if (resetInput) {
        searchInput.value = "";
        searchResults.innerHTML = "";
        searchResultsLength.innerHTML = "";
    } else {
        searchResults.innerHTML = "";
        searchResultsLength.innerHTML = "";
    }
}

// toggle search
const toggleSearch = () => {
    resetSearchFields(true);
    if (body.classList.length === 0) {
        showSearch()
    } else {
        hideSearch();
    }
}

const getSearchResults = () => {
    resetSearchFields();

    const term = searchInput.value;
    if (term !== "") {
        // console.log(e)
        const results = index.search(term, {
            fields: {
                title: {boost: 2},
                content: {boost: 1}
            }
        });

        // console.log(results)

        if (results.length === 0) {
            noResultsHTMLTemplate(term)
        } else {
            searchResultsLength.innerHTML = results.length + " results found";
            results.forEach(result => {
                resultsHTMLTemplate(result);
            })
        }        
        return results
    }
}

const showSearch = () => {
    searchBox.classList.remove("d-none");
    body.classList.add("search-background");
    content.classList.add("d-none");
    footer.classList.add("d-none");
    hamburger.classList.add('open');
    lightThemeButton.classList.add('d-none');
    darkThemeButton.classList.add('d-none');
    nav.classList.add("d-none");
    searchButton.classList.add('d-none');
}

const hideSearch = () => {
    nav.classList.add("d-none");
    searchBox.classList.add("d-none");
    body.classList.remove("search-background");
    content.classList.remove("d-none");
    footer.classList.remove("d-none");
    lightThemeButton.classList.remove('d-none');
    darkThemeButton.classList.remove('d-none');
    hamburger.classList.remove('open');
    searchButton.classList.remove('d-none');
}

const showNav = () => {
    nav.classList.remove('d-none');
    body.classList.add("nav-background");
    searchBox.classList.add("d-none");
    content.classList.add("d-none");
    footer.classList.add("d-none");
    lightThemeButton.classList.add('d-none');
    darkThemeButton.classList.add('d-none');
    hamburger.classList.add('open');
    searchButton.classList.add('d-none');
}

const hideNav = () => {
    searchBox.classList.add("d-none");
    nav.classList.add('d-none');
    body.classList.remove("nav-background");
    content.classList.remove("d-none");
    footer.classList.remove("d-none");
    lightThemeButton.classList.remove('d-none');
    darkThemeButton.classList.remove('d-none');
    hamburger.classList.remove('open');
    searchButton.classList.remove('d-none');
}

// Search on keyup
searchInput.addEventListener("keyup", getSearchResults(this));

hamburger.addEventListener('click', function(e) {
    if (!this.classList.contains('open') && nav.classList.contains('d-none')) {
        showNav();
    } else if (this.classList.contains('open') && !nav.classList.contains('d-none')) {
        hideNav();
    }  else if (this.classList.contains('open') && !searchBox.classList.contains('d-none')){
        hideSearch();
    }
    else if (this.classList.contains('open') && searchBox.classList.contains('d-none')){
        showSearch();
    }
  });