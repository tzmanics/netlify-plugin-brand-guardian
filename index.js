const fs = require('fs');

module.exports = {
  onPostBuild: ({ inputs, utils }) => {
    console.log('🔎 Searching for misspelled keywords!');

    try {
      const data = fs.readFileSync(inputs.pathToWordList);
      console.log(data.toString());
      //TODO: read in project html contents & check against json keys
    } catch (err) {
      utils.build.failPlugin(`Brand Guardian plugin failed with error: ${err}`);
    }
  },
};
