const fs = require('fs');
const readdirp = require('readdirp');

module.exports = {
  onPostBuild: async ({ constants: { PUBLISH_DIR }, inputs, utils }) => {
    console.log('🔎 Searching for misspelled keywords in:');

    for await (const entry of readdirp('.', { fileFilter: '*.html' })) {
      console.log(`${JSON.stringify(entry.path)}`);
    }
  },
};
