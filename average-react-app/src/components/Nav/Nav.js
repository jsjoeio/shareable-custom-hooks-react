import React, { useState, useEffect } from 'react'
import { ToggleButton, InnerMenu } from './Nav.styles'

function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function handleClick(e) {
      // Chrome uses e.path while Firefox uses e.composedPath()
      // Returns an array of elements in the path of the click
      const path = e.path || e.composedPath()
      const isClickInside = path.some(element => element.id === 'inner-menu')
      isClickInside ? console.log('clicked inside inner menu') : setOpen(false)
    }

    document
      .querySelector('#average-react-app')
      .addEventListener('click', handleClick, false)

    return () => {
      document
        .querySelector('#average-react-app')
        .removeEventListener('click', handleClick, false)
    }
  }, [])

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
