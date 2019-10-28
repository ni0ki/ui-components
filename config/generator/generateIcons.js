// loop through icons.json and for each entry exec plop with key as name param and value as path param
// add action 'add' that add index.ts file (skip if exists) (or append atoms/index.ts ?)
// add action 'append' that updates index.ts file with export { default as name } from ./name
// apply prettier on files

/**
 * This script will loop through icons.json and for each entry exec plop with key as name param and value as path param in order to create automatically all the svg icon components
 * After the creation of each the component, it will be reexported from atoms/svg/index.ts
 * Prettier will be executed in order to format generated files
 * Note: the process is safe: no duplicated components/exports will be generated (if files already exist they will be overridden)
 */
const iconsDef = require('../../design-tokens/icons-defs.json');
const { exec } = require('child_process');
const util = require('util');
const execAsync = util.promisify(exec);

const applyPrettier = async () =>
  Promise.all([
    execAsync('npx pretty-quick --pattern "src/atoms/svg/icons/*.tsx"'),
    execAsync('npx pretty-quick --pattern "src/atoms/svg/index.ts"')
  ]);

const generateIcon = (name, path) => {
  return execAsync(`npx plop -- --name '${name}' --path '${path}'`);
};

const generateIconComponents = async () => {
  try {
    await Promise.all(
      Object.keys(iconsDef).map(iconName =>
        generateIcon(iconName, iconsDef[iconName])
      )
    );
    await applyPrettier();
    console.log('All done ✅ \nAll Icon components have been generated 🙌🏼.');
  } catch (e) {
    console.error(`Process terminated with error ${e}`);
  }
};

generateIconComponents();
