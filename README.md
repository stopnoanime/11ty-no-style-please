# 11ty-no-style-please
A minimalist blog template for the [eleventy](https://www.11ty.dev/) static site generator. 
Inspired by [no-style-please](https://github.com/riggraz/no-style-please).
It has [Netlify CMS](https://www.netlifycms.org/) built in and can deploy to [Netlify](https://www.netlify.com/) in one click so you can start writing posts right away.

---

![Site Screenshot](/site-screenshot.png)
## [Check out the demo page](https://11ty-no-style-please.netlify.app/)

# Features
- Simple design
- Fast, minimal amount of CSS to download
- Pre-configured CMS
- Easy to use and deploy
- Fully responsive

# Usage
The simplest way to use this template is to deploy it on Netlify using this button:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/stopnoanime/11ty-no-style-please&stack=cms)

After deploying it to Netlify, you will be invited to join the CMS by email. 
After accepting the invite and setting a password, you will have a fully configured and working blog site.
If you want you can set the `site_url` in `admin/config.yml` to the correct URL for your site, this will show up in your CMS.

---
You can also run eleventy locally and then deploy it manually:

### 1. Clone the repository ( or fork it and then clone )

`git clone https://github.com/stopnoanime/11ty-no-style-please`

### 2. Install the required packages

`npm i`

### 3. Serve the site for local development

`npm start`

### 4. Build the site

`npm run build`

### 5. Deploy the site

You can either connect your repository to Netlify to enable automatic deploy (recommended), or manually copy the site files from `_site` to them.