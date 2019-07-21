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
