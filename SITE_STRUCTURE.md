# Site Structure

This file maps the public website pages to the source files you edit.

## Main Navigation

| Website page | Edit this file |
| --- | --- |
| `/` | `_pages/home.md` |
| `/about/` | `_pages/about.md` |
| `/research/` | `_pages/research.md` |
| `/projects/` | `_pages/projects.md` |
| `/methodology/` | `_pages/methodology.md` |
| `/publications/` | `_pages/publications.md` |
| `/collaborations/` | `_pages/collaborations.md` |
| `/contact/` | `_pages/contact.md` |

## Site-Wide Files

| Purpose | File |
| --- | --- |
| Navigation links | `_data/navigation.yml` |
| Site title, bio, social links, build settings | `_config.yml` |
| Shared page layouts | `_layouts/` |
| Shared HTML includes | `_includes/` |
| Styling | `_sass/` and `assets/` |
| Images | `images/` |
| Downloadable files | `files/` |

## What Was Removed

The repository previously included generated output in `_site/` and several academicpages demo sections such as sample posts, sample publications, portfolio items, talks, teaching pages, and archive pages. Those were template leftovers and are no longer part of the live site source.

## Editing Workflow

1. Find the public page you want to change.
2. Look up the matching source file in the table above.
3. Edit that file.
4. Preview locally with `bundle exec jekyll serve --host 127.0.0.1 --port 4000`.
