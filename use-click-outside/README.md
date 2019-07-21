# @jsjoeio/use-click-outside

> A custom React Hook to help you close a menu by clicking outside of it

[![NPM](https://img.shields.io/npm/v/@jsjoeio/use-click-outside.svg)](https://www.npmjs.com/package/@jsjoeio/use-click-outside) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @jsjoeio/use-click-outside
```

## Props

| prop           | type    | example                | description                                                            |
| -------------- | ------- | ---------------------- | ---------------------------------------------------------------------- |
| `initialValue` | Boolean | false                  | the intial state of the menu (i.e. open put `false` closed put `true`) |
| `elementId`    | string  | "inner-menu"           | the id on the element containing the menu (i.e. all your links)        |
| `appId`        | string  | "my-awesome-react-app" | the id on the container of your entire app                             |

## Usage

```jsx
import React from 'react'
import { ToggleButton, InnerMenu } from './Nav.styles'
import { useClickOutside } from '@jsjoeio/use-click-outside'

function Nav() {
  const [open, setOpen] = useClickOutside({
    initialValue: false,
    elementId: 'inner-menu',
    appId: 'example-react-app'
  })

  return (
    <header>
      <nav>
        <ToggleButton onClick={() => setOpen(!open)}>Menu</ToggleButton>
        <InnerMenu open={open} id="inner-menu">
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Values</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </InnerMenu>
      </nav>
    </header>
  )
}

export default Nav
```

## License

MIT © [jsjoeio](https://github.com/jsjoeio)

---

This hook was created using [create-react-hook](https://github.com/hermanya/create-react-hook).
