# 🔌 Netlify Plugin: Brand Guardian ☑️

This is a [Build Plugin](https://docs.netlify.com/configure-builds/build-plugins/?utm_source=repo&utm_medium=brand-guardian-tzm&utm_campaign=devex) searches all the HTML files in you project and looks for any misspelled words you provide changing them to the correct spelling. This is especially useful for brand words that may not be spelled the conventional way. I mean, who needs vowels, amirite, sorry, mrt 😬.

## Demonstration

Could you imagine how embarrassing it would be to deliver a site with all these misspellings of my company's name? Such embarass!

![screenshots of the demo site with bayd spelling](https://res.cloudinary.com/dzkoxrsdj/image/upload/v1589598195/baydSpelling_a9xjm2.jpg)

Once we add this plugin we can rest at ease knowing silly spelling spoofs will automatically be avoided. This is what the same site look like with the plugin, like there wasn't a trained hamster typing 🐹. Yay!

![screenshots of the demo site with good spelling](https://res.cloudinary.com/dzkoxrsdj/image/upload/v1589598193/goodSpelling_ewvt2s.jpg)

## Usage

So you want to use this plugin, 😊 I'm honored. Here are the steps to get it installed and configured.

1. Make sure you have [Build Plugins enabled](https://docs.netlify.com/configure-builds/build-plugins/?utm_source=repo&utm_medium=brand-guardian-tzm&utm_campaign=devex#enable-build-plugins-beta)

2. Add the plugin to your [`netlify.toml` configuration file](https://docs.netlify.com/configure-builds/file-based-configuration/?utm_source=repo&utm_medium=brand-guardian-tzm&utm_campaign=devex).

3. Make a JSON file of possible spelling snafus.

4. Add the path to that 👆 word list JSON file to your `netlify.toml` file.

5. Push those changes and get ready for the ✨magic ✨!

## Try It With a Demo

You can try out this plugin by deploying [a simple site](https://demo-netlify-plugin-brand-guardian.netlify.app) which uses it.

Clicking the button below will clone [a test site repo](https://github.com/tzmanics/demo-netlify-plugin-brand-guardian), setup a new site [on Netlify](https://netlify.com?utm_source=repo&utm_medium=brand-guardian-tzm&utm_campaign=devex) and deploy the site complete with the plugin configured. You'll still want to [enable Build Plugins](https://docs.netlify.com/configure-builds/build-plugins/?utm_source=repo&utm_medium=brand-guardian-tzm&utm_campaign=devex#enable-build-plugins-beta) for this project.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://app.netlify.com/start/deploy?repository=https://github.com/philhawksworth/demo-netlify-plugin-fetch-feeds)
