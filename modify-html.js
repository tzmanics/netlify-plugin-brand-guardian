const fs = require('fs');
const unified = require('unified');
const parse = require('rehype-parse');
const stringify = require('rehype-stringify');
const visit = require('unist-util-visit');

const visitor = (brandWords) => (tree) => {
  visit(tree, 'text', (node) => {
    let word = Object.entries(brandWords).forEach((entry) => {
      const [properSpelling, misspellingsArray] = entry;
      misspellingsArray.forEach((misspelledWord) => {
        node.value = node.value.replace(misspelledWord, properSpelling);
      });
    });
  });
};

exports.modifyHtml = (filePath, brandWords) => {
  console.log('🔎 Searching for misspelled keywords in:', filePath);
  const markup = unified()
    .use(parse)
    .use(visitor, brandWords)
    .use(stringify)
    .processSync(fs.readFileSync(filePath))
    .toString();

  fs.writeFileSync(filePath, markup);
};
