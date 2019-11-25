const { exec } = require('child_process');
const util = require('util');
const execAsync = util.promisify(exec);

const generateStylesheet = language => {
  return execAsync(`npx plop colorStylesheet -- --language '${language}'`);
};

const languages = ['css', 'scss'];

const generateStylesheets = async () => {
  try {
    await Promise.all(
      languages.map(async language => generateStylesheet(language))
    );
    console.log('All done ✅ \nAll Icon components have been generated 🙌🏼.');
  } catch (e) {
    console.error(`Process terminated with error ${e}`);
  }
};

generateStylesheets();
