const { exec } = require('child_process');
const util = require('util');
const execAsync = util.promisify(exec);

const applyPrettier = async language =>
  Promise.all([
    execAsync(`npx prettier --write "src/colors/colors.${language}"`)
  ]);

const generateStylesheet = language => {
  return execAsync(`npx plop colorStylesheet -- --language '${language}'`);
};

const languages = ['css', 'scss', 'ts'];

const generateStylesheets = async () => {
  try {
    await Promise.all(
      languages.map(async language => {
        await generateStylesheet(language);
        await applyPrettier(language);
      })
    );
    console.log(
      'All done ✅ \nAll colors have bee added to your stylesheets 🙌🏼.'
    );
  } catch (e) {
    console.error(`Process terminated with error ${e}`);
  }
};

generateStylesheets();
