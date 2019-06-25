# UI Components

This library contains Dashlane's reusable ui components built with React 🎉

## Getting Started

### Prerequisites

You need to install on your machine :

- a recent version of [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) as a dependency manager

### Compatibility

Your project needs to use React 16 or later

### Installing

Add `ui-components` to your project by executing :

```
yarn add @dashlane/ui-components@latest
```

### Usage

Here is a basic usage example:

```typescript jsx
import * as React from 'react';
import { Button } from '@dashlane/ui-components';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <Button title={'Click me'} primary />
    </div>
  );
};

export default App;
```

## Usage guide

All the available components of the library are described [here](https://dashlane.github.io/ui-components/). Feel free to navigate through out the documentation to test their behaviour.

## Built With

- [React](https://reactjs.org/) - The javascript library
- [Styled-Components](https://www.styled-components.com/) - Used to create styled React components with an improved experience for developers
- [Yarn](https://yarnpkg.com/lang/en/docs/) - Dependency Management

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on contributing on this project and the process for submitting pull requests.

## Versioning

We use [SemVer](http://semver.org/) for versioning. To see all available versions, you can run

```
yarn info @dashlane/ui-components versions
```
