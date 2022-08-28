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
After accepting the invite and setting a password you can start change the site's settings, and creating posts from within the CMS.

---
You can also run eleventy locally and then deploy it manually:

### 1. Clone the repository ( or use it as a template then clone )

`git clone https://github.com/stopnoanime/11ty-no-style-please`

### 2. Install the required packages

`npm i`

### 3. Serve the site for local development

`npm start`

### 4. Build the site

`npm run build`

### 5. Deploy the site

You can either connect your repository to Netlify to enable automatic deploy (recommended), or manually copy the site files from `_site` to them.

# Configuration
All configuration can be easily changed from within the Netlify CMS at `SITE_URL/admin`.
If you prefer to do so, you can also manually edit the configuration files with a text editor.

All configuration files are located in the `_data` folder and are in `json` format.
Here I describe what each field means:

### - site.json
```
title: default page title
description: global page description
language: HTML language value
back_home_text: text to show on "back home" button on every post
url: site url, used in Netlify CMS
```

### - homepage.json
```
title: homepage title
subtitle: text to show under homepage title
menu: The menu object, configures how the menu looks
```

### - The menu object
It should be an array of entires, each entry has the following parameters:
```
title: entry title
url: if set, the entry is a link pointing to this url
post_list: accepts a string, if set, the entry will show a nested list of all posts with the tag that post_list is set to
entries: an nested array of entries with the same available parameters
```

For example use, look at the default menu object
```
"menu": [
    {
        "title": "read more here",
        "entries": [
            {
                "title": "github",
                "url": "http://github.com/stopnoanime/11ty-no-style-please"
            }
        ]
    },
    {
        "title": "all posts with the 'post' tag",
        "post_list": "post"
    }
]
```
