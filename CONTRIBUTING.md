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

3. Build

   ```
   yarn start
   ```

The last command will watch files located `src` and will recompile whenever they change. The resulted generated files will be located in `build` folder.

### Contributing

Before contributing on this repo, please keep in mind that:

- We aim to have dumb components in this lib : they are <strong>presentational components</strong> and they shouldn't do any data treatment or management.
- We use <strong>styled-components</strong> for a better developers experience.
- Every new component <strong>should be tested</strong>, if you are modifying an existing one you should update related tests.
- Every new component <strong>should be documented</strong>, please follow the section below <strong>Documented components</strong>
- Please follow the sample <strong>Button</strong> component as a reference/guide to create future ones.
- Please read the [following documentation](https://confluence.dashlane.com/display/WP/Pull+requests+guidelines) before creating your first pull request on the project.
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

- we also execute the task <strong>`yarn exec-docz-update`</strong> on pre-commit that will check if we have added or updated any `Docz` documentation, regenrate documentation build and add them to git : in this way, we assure that https://dashlane.github.io/ui-components is always up to date

- <strong>Jest tests</strong> are run everytime you attempt to <strong>push new code on remote</strong>

- Theses checks/rules are quite strict but very beneficial: they protect us from having :poop: slip into our code base

### Running tests

We use [Jest](https://jestjs.io/) as testing framework and assertion library. We use [Enzyme](https://airbnb.io/enzyme/) as a testing utility for react components and [snapshot tests](https://jestjs.io/docs/en/snapshot-testing) to make sure that our UI does not change unexpectedly.

- To run tests, please execute

  ```
  yarn test
  ```

- To run tests in watch mode, please execute

  ```
  yarn test-watch
  ```

## Build

In order to build this library you can simply run

```
yarn build
```

which will generate in the folder `build` a transpiled bundle in `ES6` with the associated typing.
