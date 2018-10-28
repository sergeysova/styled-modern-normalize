# styled-modern-normalize

CSS-normalize library for [styled-components][].

The original `modern-normalize.css` is pulled from [sindresorhus/modern-normalize][], and parsed into styled ready format.


## Usage

```sh
npm install --save styled-modern-normalize
```

### Readme

Read styled-components [createGlobalStyle][] documentation

> This is just example

```js
import React from 'react'
import { Normalize } from 'styled-modern-normalize'

import { App } from './app'

const Root = () => (
  <React.Fragment>
    <Normalize />
    <App />
  </React.Fragment>
)
```

> For older version of styled-components this API renders to `null`

You can also use named imports:

```js
// ES Modules
import { Normalize } from 'styled-modern-normalize'

// CommonJS
const { Normalize } = require('styled-modern-normalize')
```

You can also import [css] without Component API:

```js
import { normalize } from 'styled-modern-normalize`
// Different from `Normalize`

// Example usage:
injectGlobal`
  ${normalize}
`
```

## License

The [MIT License](LICENSE)

[sindresorhus/modern-normalize]: https://github.com/sindresorhus/modern-normalize
[styled-components]: https://styled-components.com/
[createGlobalStyle]: https://www.styled-components.com/docs/api#createglobalstyle
[css]: https://www.styled-components.com/docs/api#css
