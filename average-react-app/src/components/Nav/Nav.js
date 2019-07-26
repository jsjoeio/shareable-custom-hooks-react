import React, { useState, useEffect } from 'react'
import { ToggleButton, InnerMenu, MenuLink } from './Nav.styles'

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
  const toggleButtonRef = React.useRef(null)

  return (
    <header>
      <nav>
        <ToggleButton
          ref={toggleButtonRef}
          tabIndex={0}
          onClick={() => setOpen(!open)}
          role="button"
          onKeyDown={e => {
            if (e.keyCode === 32 || e.keyCode === 13) {
              if (e.keyCode === 32) e.preventDefault()
              setOpen(true)
            }
          }}
          onBlur={() => setOpen(false)}
        >
          Menu
        </ToggleButton>
        <InnerMenu open={open} id="inner-menu">
          <MenuLink href="/home">
            <li>Home</li>
          </MenuLink>
          <MenuLink href="/products">
            <li>Products</li>
          </MenuLink>
          <MenuLink href="/values">
            <li>Values</li>
          </MenuLink>
          <MenuLink href="/team">
            <li>Team</li>
          </MenuLink>
          <MenuLink href="/contact">
            <li>Contact</li>
          </MenuLink>
        </InnerMenu>
      </nav>
    </header>
  )
}

export default Nav
