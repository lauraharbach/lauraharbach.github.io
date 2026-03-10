# Laura Harbach Website

This repository contains the source for https://lauraharbach.github.io.

## Edit Guide

The fastest way to find the source for a page is in [SITE_STRUCTURE.md](SITE_STRUCTURE.md).

Main content lives in:

- `_pages/` for primary website pages
- `images/` for page images and profile assets
- `files/` for downloadable files such as PDFs
- `_data/navigation.yml` for the top navigation bar
- `_config.yml` for global site settings and author metadata

## Local Preview

Run the site locally from the repository root:

```bash
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Then open `http://127.0.0.1:4000`.

## Notes

The site still uses the academicpages / Minimal Mistakes foundation, but the repository has been trimmed to keep only Laura-specific content and the files needed to build the site.

