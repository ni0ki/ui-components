/**
 * This script will check if we have updated any Docz files or added new ones, if it's the case it will and exec the build docz file again and add them to git
 * This will allow us to always have https://dashlane.github.io/ui-components/ up to date
 */
const { exec } = require('child_process');

const containsMdxFile = output => /\.mdx/.test(output);

exec('git status', (err, stdout) => {
  return containsMdxFile(stdout)
    ? exec('yarn docz:build && git add docs/')
    : null;
});
