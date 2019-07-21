import React, { useState } from 'react'
import { ToggleButton, InnerMenu } from './Nav.styles'

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header>
      <nav>
        <ToggleButton onClick={() => setOpen(!open)}>Menu</ToggleButton>
        <InnerMenu open={open}>
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
