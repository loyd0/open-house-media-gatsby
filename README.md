# Gatsby, Tailwind & Contentful CSS Starter

`yarn` to get started

Make sure you have the gatsby cli installed

# Changes

## 07/05/21
- Fixed an error in the SEO page where the images from contentful wouldn't display as twitter cards properly
- Added a path option for when linking to sub pages for correct links passed to meta / social cards

## 14/04/21

- Added example `gatsby-node.js` files
- Added note about new react hooks forms version
- added new Gatsby Plugin Image to gatsby config
- Updated all packages
- Updated Linked Component to use AnchorLinks by default
- Added simple video iframe component
- Added an alternative Nav
- Added example page and Blog Post templates
- Added base Carousel Component setup

## 11/03/21

- Added in `postcss.config` which was missing for TailwindCSS implementation
- Updated to Gatsby V3.0
- Added new [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image)
- Removed the depreciated gatsby-image
- Updated relevant packages for V3.0
- Updated React
- Major package bump

## 17/02/21

- Updated tailwindcss implementation
- Update useBodyLock to implement auto no scroll

## 01/12/2020

- Added React Share and default component
  - Docs here `https://github.com/nygardk/react-share`
- Added Twitter comment component
- Updated LinkedComponent
- Added FontAwesomeBrands
- Added reading time plugin `https://www.gatsbyjs.com/plugins/gatsby-plugin-readingtime-contentful/?=reading%20time`
- Updated to Gatsby Plugin Webfonts, old one was unreliable -
  - docs here -> `https://www.gatsbyjs.com/plugins/gatsby-plugin-webfonts/`

# Features

- TailwindCSS (Updated to V2)
- Font-Awesome (now as package rather than CSS)
- DotEnv (supports .env loading)
- Contentful CMS
  - Requires you to enter workspace id and keys
  - Don't forget to create your .env. files to store the keys (default `CONTENTFUL_ACCESS_TOKEN`)
  - If you have tonnes of errors when you run, you need to have content in contentful in order for the blocks/components not to freak out
- Alias imports (allows you to do "@components" instead of "../src/components" etc)
- Added AOS for animations on scroll
  - <div data-aos="fade-up"  data-aos-duration="1000" >
  - See `https://michalsnik.github.io/aos/` for more
- External / Internal Link resolver component
- Added Anchor Links package for gatsby that allows easy scroll to page section
- Addded React Cookies Package - see `https://www.npmjs.com/package/react-cookie-consent` for details
- Added netlify Toml to allow plugins and redirects
  - All content is commented out, so uncomment to begin
- Added starter examples of MarkDown and Rich Text Components
  - Added the required packages (markdown-to-jsx and contentful-richtext)
- Added Dynamic Forms as examples
- Added new utils
  - UTM Extractors
  - Email Validator
  - Object > Array
  - URL Encoder
- Added hooks
  - useBodyLock - locks scrolling on body (when full screen menus are open for example)
  - useClipboard - automatically add to a clipboard
  - useMarkDown - use markdown text returns mark down from input strings
- Forms ("react-hook-form")
  - See the documentation here https://react-hook-form.com/get-started
  - See the example form component
- Comes with mobile nav and animation already added
