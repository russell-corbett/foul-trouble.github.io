# russellcorbett.ca

My personal portfolio site, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com) and deployed to GitHub Pages. It's the project I taught myself frontend development with.

## Commands

| Command           | Action                                    |
| :---------------- | :---------------------------------------- |
| `npm install`     | Install dependencies                      |
| `npm run dev`     | Start the dev server at `localhost:4321`  |
| `npm run build`   | Build the production site to `./dist/`    |
| `npm run preview` | Preview the build locally                 |

Pushing to `main` deploys the site through GitHub Actions.

## Updating content

Almost everything on the page lives in `src/json/`:

| File                | Content                                            |
| :------------------ | :------------------------------------------------- |
| `highlights.json`   | Headline results under the hero                    |
| `experience.json`   | Jobs: `main` is always visible, `earlier` is behind a button |
| `teams.json`        | Leadership and engineering teams                   |
| `projects.json`     | Project cards and their popups. The first six show by default |
| `skills.json`, `languages.json`, `applications.json` | Skills and logo rows |
| `awards.json`, `volunteering.json` | Awards and volunteering             |
| `homeassistant.json` | Device, integration, and automation counts for the Smart Home project. Update by hand; leave as `null` to hide them |
| `resumes.json`      | Resume buttons. An entry only appears if its PDF exists in `public/` |

Add images to `public/` as WebP, sized to no more than about twice their display size.
