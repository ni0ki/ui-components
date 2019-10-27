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
};
