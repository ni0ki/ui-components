/**
 * This script will loop through icons.json and for each entry exec plop with key as name param and value as path param in order to create automatically all the svg icon components
 * After the creation of each the component, it will be reexported from atoms/svg/index.ts
 * Prettier will be executed in order to format generated files
 * Note: the process is safe: no duplicated components/exports will be generated (if files already exist they will be overridden)
 */
const iconsDef = require('../../../src/design-tokens/icons/icons-defs.json');
const { exec } = require('child_process');
const util = require('util');
const execAsync = util.promisify(exec);

const applyPrettier = async () =>
  Promise.all([
    execAsync('npx pretty-quick --pattern "src/atoms/svg/icons/*.tsx"'),
    execAsync('npx pretty-quick --pattern "src/atoms/svg/index.ts"')
  ]);

const generateIcon = async (name, path) => {
  return await execAsync(
    `npx plop iconComponent -- --name '${name}' --path '${path}'`
  );
};

const generateIconComponents = async () => {
  try {
    for (let key of Object.keys(iconsDef)) {
      await generateIcon(key, iconsDef[key]);
    }
    await applyPrettier();
    console.log('All done ✅ \nAll Icon components have been generated 🙌🏼.');
  } catch (e) {
    console.error(`Process terminated with error ${e}`);
  }
};

generateIconComponents();
