
# styled-modern-css-reset
[![package version](https://img.shields.io/npm/v/styled-modern-css-reset.svg?style=flat-square)](https://npmjs.org/package/styled-modern-css-reset)
[![package downloads](https://img.shields.io/npm/dm/styled-modern-css-reset.svg?style=flat-square)](https://npmjs.org/package/styled-modern-css-reset)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/styled-modern-css-reset.svg?style=flat-square)](https://npmjs.org/package/styled-modern-css-reset)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> [modern-css-reset](https://github.com/hankchizljaw/modern-css-reset) + Styled Components

## Table of Contents

- [styled-modern-css-reset](#styled-modern-css-reset)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
  - [Similar](#similar)
  - [Contribute](#contribute)
  - [License](#license)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com).

```sh
$ npm install styled-modern-css-reset
$ # OR
$ yarn add styled-modern-css-reset
```

## Usage

```jsx
import { ModernCSSReset } from 'styled-modern-css-reset'

const App = () => (
  <>
    <ModernCSSReset />
    <div>Hi, I'm an app!</div>
  </>
}

export default App
```

`reset` is also available as a named export:

```javascript
import { injectGlobal } from 'styled-components'
import reset from 'styled-modern-css-reset'

injectGlobal`
  ${reset}
`
```

## Similar

- [styled-normalize](https://www.npmjs.com/package/styled-normalize) by [Sergey Sova](https://github.com/sergeysova).

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT

