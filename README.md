# 🔌 Netlify Plugin: Brand Guardian ☑️

This is a [Build Plugin](https://docs.netlify.com/configure-builds/build-plugins/?utm_source=repo&utm_medium=brand-guardian-tzm&utm_campaign=devex) that searches all the HTML files in your project and looks for any misspelled words you provide changing them to the correct spelling. This is especially useful for brand words that may not be spelled the conventional way. I mean, who needs vowels, amirite, sorry, mrt 😬.

## Usage

So you want to use this plugin, 😊 I'm honored. Here are the steps to get it installed and configured.

### 1. Make sure your project has [Build Plugins enabled](https://docs.netlify.com/configure-builds/build-plugins/?utm_source=repo&utm_medium=brand-guardian-tzm&utm_campaign=devex#enable-build-plugins-beta)(<- this link shows you how).

### 2. Add the plugin to your [`netlify.toml` configuration file](https://docs.netlify.com/configure-builds/file-based-configuration/?utm_source=repo&utm_medium=brand-guardian-tzm&utm_campaign=devex).

First, you'll signify you're adding a plugin with ` [[plugins]]``. Then underneath add a line that tells Netlify where to find the plugin by providing the name to `package`.

```toml
[[plugins]]
package = "netlify-plugin-brand-guardian"
```

### 3. Make a JSON file of possible spelling snafus.

This JSON file should first list the correct spelling of the word you're looking for misspellings of followed by an array of strings listing the different ways it may be misspelled. Feel free to name it whatever you like. You'll be providing the path to this file as well so you can place it anywhere in the project directory.

```json
{
  "Netlify": ["Nrtlify", "Nootlify", "netlifries", "netlify"],
  "GitHub": ["gitHib"]
}
```

> [🐙 You can see what this file looks like](https://github.com/tzmanics/demo-netlify-plugin-brand-guardian/blob/master/src/wordList.json) in the demo project repo.

### 4. Add the path to your 👆 word list JSON file to your `netlify.toml` file.

Underneath where you added this plugin in your `netlify.toml` file you'll add a place to declare `plugins.inputs`. For this plugin you will add a `pathToWordList` followed by a relative path the the file from the directory where your project is being published (like your `publish` location).

```toml
[[plugins]]
package = "netlify-plugin-brand-guardian"
  [plugins.inputs]
  pathToWordList = "/data/brandMisspellings.json"
```

> [🐙 Here's a link](https://github.com/tzmanics/demo-netlify-plugin-brand-guardian/blob/master/netlify.toml) to the complete `netlify.toml` file of the demo project.

### 5. Push those changes and get ready for the ✨magic ✨!

If you already have your project [connected to your Git repo](https://docs.netlify.com/site-deploys/create-deploys/?utm_source=repo&utm_medium=brand-guardian-tzm&utm_campaign=devex#deploy-with-git) when you push this new code it will deploy your project using this plugin. Otherwise, you can deploy your project [any other way you like](https://docs.netlify.com/site-deploys/overview/#deploy-summary?utm_source=repo&utm_medium=brand-guardian-tzm&utm_campaign=devex) and this plugin will search your project and make the changes requested 😘.

> 🧠 For more information on using Netlify Build Plugins you can check out [this blog post](https://www.netlify.com/blog/2020/04/30/whats-a-netlify-build-plugin-series-part-1-using-build-plugins/?utm_source=repo&utm_medium=brand-guardian-tzm&utm_campaign=devex) covering just that.

## Demonstration

Could you imagine how embarrassing it would be to deliver a site with all these misspellings of my company's name? Such embarass!

![screenshots of the demo site with bayd spelling](https://res.cloudinary.com/dzkoxrsdj/image/upload/v1589598195/baydSpelling_a9xjm2.jpg)

Once we add this plugin we can rest at ease knowing silly spelling spoofs will automatically be avoided. This is what the same site look like with the plugin, like there wasn't a trained hamster typing 🐹. Yay!

![screenshots of the demo site with good spelling](https://res.cloudinary.com/dzkoxrsdj/image/upload/v1589598193/goodSpelling_ewvt2s.jpg)

## Try It With a Demo

You can try out this plugin by deploying [a simple site](https://demo-netlify-plugin-brand-guardian.netlify.app) which uses it.

Clicking the button below will clone [a test site repo](https://github.com/tzmanics/demo-netlify-plugin-brand-guardian), setup a new site [on Netlify](https://netlify.com?utm_source=repo&utm_medium=brand-guardian-tzm&utm_campaign=devex) and deploy the site complete with the plugin configured. You'll still want to [enable Build Plugins](https://docs.netlify.com/configure-builds/build-plugins/?utm_source=repo&utm_medium=brand-guardian-tzm&utm_campaign=devex#enable-build-plugins-beta) for this project.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/tzmanics/demo-netlify-plugin-brand-guardian)
