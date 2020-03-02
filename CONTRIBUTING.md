## Development

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to install on your machine :

- a recent version of [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) as version control system
- [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) as a dependency manager

### Installing

In order to get your local development env running, you need to follow the steps below :

1. Clone the project

   ```
   git clone ssh://git@stash.dashlane.com:7999/wp/dashlane-components.git
   ```

2. Install dependencies

   ```
   yarn
   ```

3. Build in watch mode

   ```
   yarn start
   ```

The last command will watch files located `src` and will recompile whenever they change. The resulted generated files will be located in `build` folder.

### Developing

Once you have started the watched build on ui-component lib, you can start using this dev version in your project instead of the npm released version.

All you need to do is:

1. Link the ui-component lib to register it as a link-able project in yarn

   ```
   yarn link
   ```

2. Tell your project to use the local ui-component build

   ```
   yarn link @dashlane/ui-components
   ```

3. You also need to link React version to your project's as it is a peer-dependency
   ```
      yarn link PATH/TO/YOUR/PROJECT/node_modules/react
   ```

4) Start devServer on your project

### Contributing

Before contributing on this repo, please keep in mind that:

- We aim to have dumb components in this lib : they are <strong>presentational components</strong> and they shouldn't do any data treatment or management.
- We use <strong>styled-components</strong> for a better developers experience.
- Every new component <strong>should be tested</strong>, if you are modifying an existing one you should update related tests.
- Every new component <strong>should be documented</strong>, please follow the section below <strong>Documented components</strong>
- Please follow the sample <strong>Button</strong> component as a reference/guide to create future ones.
- Please follow [the conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) guidelines for you commits messages <strong>Example of commit messages: `docs: correct spelling of CHANGELOG`& `feat(navbar): add background color prop`</strong>

### Documented components

You can play/test existing components or your newly created one locally (without having to integrate it into another project) by using the fascinating tool called <strong>`Docz`</strong>.

All you need to do is :

- Create a file called `yourComponent.mdx`
- Import your component and start specifying its behaviour (its basic usage with defaults, specified props ...)
- Add Docz <strong> `<Playground>` </strong> built-in component to enable live code testing on your component
- Run <strong>`yarn docz:dev`</strong> in order to start a local server of our documented ui-components lib
- Visualize your documentation: You can play/live test the components behaviour by clicking on `<>` button

### Code linting and formatting

We use `prettier` to format and `eslint` with typescript settings to lint our code.

### Good to know :

- It's convenient to configure your ide in order automatically format your files. Please follow this [Editor Integration documentation](https://prettier.io/docs/en/editors.html).

- Otherwise, we have a yarn task that formats your <strong>git staged files</strong> for you. You can simply run `yarn pretty-quick`

- We also have an automatic task that runs a <strong>prettier</strong> and <strong>eslint</strong> check on git staged files everytime you attempt to create a new <strong>commit</strong> in order to be sure that things are OK

- A check on the message format is executed as well on commit-msg hook using [commitlint tool](https://github.com/conventional-changelog/commitlint)

- we also execute the task <strong>`yarn exec-docz-update`</strong> on post-commit that will check if we have added or updated any `Docz` documentation (by modifying or adding any .mdx file), regenerate new built documentation and add push it through a new dedicated commit : in this way, we assure that https://dashlane.github.io/ui-components is always up to date.

- <strong>Jest tests</strong> are run everytime you attempt to <strong>push new code on remote</strong>

- Theses checks/rules are quite strict but very beneficial: they protect us from having :poop: slip into our code base

- In order to avoid repetitive/manual work to create svg icons components (since they are all similar only the content of the svg changes [see `src/atoms/icons` folder]), we choose to generate them. All you need to do is to update/add content in `src/design-tokens/icons-defs.json` and run the task `yarn generate-icon-components`. This commandline runs a script located in `config/generator/generateIcons.js` that generates all specified icons in the json mentioned earlier following the `config/generator/IconComponentTemplate.tsx.hbs` template. It also updates the `src/atoms/svg/index.ts` to export the generated components. Note: this process is safe: no duplicated components/exports will be generated (if files already exist they will be overridden)

### Running tests

We use [Jest](https://jestjs.io/) as testing framework and assertion library. We use [Enzyme](https://airbnb.io/enzyme/) as a testing utility for react components and [snapshot tests](https://jestjs.io/docs/en/snapshot-testing) to make sure that our UI does not change unexpectedly.

- To run tests, please execute

  ```
  yarn test
  ```

- To run tests in watch mode, please execute

  ```
  yarn test:watch
  ```

## Build

In order to build this library you can simply run

```
yarn build
```

which will generate in the folder `build` a transpiled and minified components as [ES6 modules](https://rollupjs.org/guide/en/#es-module-syntax) (to allow tree-shaking) with the associated typing.

## Release

In order to relase and publish the library, run

```
yarn release
```

This will build your project, automaticaly assign a new version to the package and publish it.
