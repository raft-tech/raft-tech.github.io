## Member Profiles:

The file `members.yaml` holds all the information to populate company profile pages.

#### YAML Structure

```yml
  # Required
  - id:
    full_name:
    permalink:

    # Optional values
    website:
    github:
    role:
    bio:
    linkedin:
    image:
```

#### Generate Profiles

We use a Jekyll plugin called [pagemaster](https://github.com/mnyrop/pagemaster) to generate the profiles, you may need to run `bundle install`.

```bash
(rm -r _about || echo "no folder") bundle exec jekyll pagemaster --no-permalink about

# pagemaster doesn't re-generate existing pages.
# It will skip any updates made to `members.yaml`
# To generate only new profiles:

bundle exec jekyll pagemaster --no-permalink about
```

The files will be written into a local `_about` folder. The profiles will be available at `/about/bob` using the layout in `_layouts/about/profile.html`. 
