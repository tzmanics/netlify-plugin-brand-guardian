const fs = require('fs');
const readdirp = require('readdirp');
const { modifyHtml } = require('./modify-html');

module.exports = {
  onPostBuild: async ({ constants: { PUBLISH_DIR }, inputs, utils }) => {
    const wordListFile = `${PUBLISH_DIR}${inputs.pathToWordList}`;
    if (!fs.existsSync(wordListFile)) {
      utils.build.failBuild('No file at provided file path ☹️.');
    }
    let brandWords = JSON.parse(
      fs.readFileSync(`${PUBLISH_DIR}${inputs.pathToWordList}`)
    );

    for await (const entry of readdirp(PUBLISH_DIR, { fileFilter: '*.html' })) {
      modifyHtml(`${PUBLISH_DIR}/${entry.path}`, brandWords);
    }
  },
};
