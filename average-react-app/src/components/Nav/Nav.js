import React from 'react'
import { ToggleButton, InnerMenu } from './Nav.styles'

class Nav extends React.Component {
  state = {
    open: false
  }

  render() {
    return (
      <header>
        <nav>
          <ToggleButton
            onClick={() => this.setState({ open: !this.state.open })}
          >
            Menu
          </ToggleButton>
          <InnerMenu open={this.state.open}>
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
}

export default Nav
