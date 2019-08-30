/**
 * This script will check if we have updated any Docz files or added new ones, if it's the case it will and exec the build docz file again and add them to git
 * This will allow us to always have https://dashlane.github.io/ui-components/ up to date
 */
const { exec } = require('child_process');

const containsMdxFile = output => /\.mdx/.test(output);

exec('git status', (err, stdout) => {
  if (!containsMdxFile(stdout)) {
    console.log('No documentation update needed');
    return null;
  }
  console.log('Building the documentation...');
  exec('yarn docz:build');
  console.log('Committing the new changes');
  exec('git add docs/ && git commit -S -m "docs: update docz documentation"');
});
