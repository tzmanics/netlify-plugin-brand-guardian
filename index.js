const fs = require('fs');
const readdirp = require('readdirp');
const { modifyHtml } = require('./modify-html');

module.exports = {
  onPostBuild: async ({ constants: { PUBLISH_DIR }, inputs, utils }) => {
    let htmlFiles = [];
    let brandWords = {
      "Netlify" : ["Nrtlify", "netlify", "Betlify", "netilfy"],
      "GitHub" : ["gitHib"]
    };

    console.log('🔎 Searching for misspelled keywords in:');

    for await (const entry of readdirp(PUBLISH_DIR, { fileFilter: '*.html' })) {
      modifyHtml(`${PUBLISH_DIR}/${entry.path}`, brandWords);
    }

    console.log(htmlFiles);

    /* for await (const file of htmlFiles) {
      fs.createReadStream(file)
        .on('error', () => {
          utils.build.failPlugin(`createReadStream error: `, error);
        })
        .on('data', () => {
          console.log('data');
        })
        .on('end', () => {
          console.log('end');
        });
    } */
    /* let fileStream = fs.createReadStream(entry.path);
    const regex = new RegExp('\\b' + 'Betlify' + '\\b');
    if (regex.test(fileStream)) {
      console.log(`thing ${entry.path}`);
    } */
  },
};
