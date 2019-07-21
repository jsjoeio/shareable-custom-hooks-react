import React, { useState, useEffect } from 'react'
import { ToggleButton, InnerMenu } from './Nav.styles'

function useMenuOpen(initialValue) {
  // returns an array [value, updateValueFunction]
  return useState(initialValue)
}

function useClickOutside({ handler, elementId, appId }) {
  useEffect(() => {
    function handleClick(e) {
      // Chrome uses e.path while Firefox uses e.composedPath()
      // Returns an array of elements in the path of the click
      const path = e.path || e.composedPath()
      const isClickInside = path.some(element => element.id === elementId)
      isClickInside
        ? console.log(`clicked inside ${elementId}`)
        : handler(false)
    }
    const app = `#${appId}`
    document.querySelector(app).addEventListener('click', handleClick, false)

    return () => {
      document
        .querySelector(app)
        .removeEventListener('click', handleClick, false)
    }
  }, [handler, elementId, appId])
}

function Nav() {
  const [open, setOpen] = useMenuOpen(false)

  useClickOutside({
    handler: setOpen,
    elementId: 'inner-menu',
    appId: 'average-react-app'
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
