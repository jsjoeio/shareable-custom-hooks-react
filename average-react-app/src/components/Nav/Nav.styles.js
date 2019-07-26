import styled, { css } from 'styled-components'

const focusStyles = () => css`
  &:focus,
  &active {
    border-color: #2188ff;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075),
      0 0 0 0.2em rgba(255, 60, 26, 0.3);
    outline: none;
  }
`

export const ToggleButton = styled.div`
  padding: 8px 16px;
  color: tomato;
  border: 1px solid;
  border-radius: 3px;
  font-size: 24px;
  font-weight: bold;
  margin: 24px 48px 0;
  position: absolute;
  right: 0;
  cursor: pointer;
  user-select: none;

  ${focusStyles};
`

export const InnerMenu = styled.ul`
  width: 160px;
  padding: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 78px;
  margin: 0 48px;
  border-radius: 3px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
  background-color: ${props => (props.open ? 'white' : 'transparent')};
  display: ${props => (props.open ? 'block' : 'none')};

  font-size: 20px;
  list-style: none;
  text-align: left;

  li {
    cursor: pointer;
    width: 136px;
    padding: 6px 12px;
    ${focusStyles};
    &:hover {
      color: white;
      background-color: tomato;
    }
  }
`

export const MenuLink = styled.a`
  ${focusStyles};
`
