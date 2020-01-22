const colorTokens = require('./src/design-tokens/colors.json');

module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create an icon component',
    prompts: [
      {
        type: 'input',
        name: 'name'
      },
      {
        type: 'input',
        name: 'path'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/atoms/svg/icons/{{pascalCase name}}.tsx',
        templateFile: 'config/generator/IconComponentTemplate.tsx.hbs',
        force: true
      },
      {
        type: 'append',
        path: 'src/atoms/svg/index.ts',
        unique: true,
        pattern: /(\/\*-- EXPORT ICON COMPONENTS --\*\/)/gi,
        template:
          "export { default as {{pascalCase name}} } from './icons/{{pascalCase name}}';"
      }
    ]
  });

  plop.setGenerator('colorStylesheet', {
    description: 'Create color css stylesheet',
    prompts: [
      {
        type: 'input',
        name: 'language'
      }
    ],
    actions: [
      {
        type: 'add',
        data: {
          colorTokens
        },
        path: './src/design-tokens/colors/colors.{{language}}',
        templateFile:
          'config/generator/colorGenerator/templates/colors.{{language}}.hbs',
        force: true
      }
    ]
  });
};
