import styled from 'styled-components'

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
`

export const InnerMenu = styled.div`
  text-align: center;
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

  ul {
    font-size: 20px;
    list-style: none;
    margin: 0;
    text-align: left;
    padding: 0;
    width: 100%;
    position: relative;
    li {
      cursor: pointer;
      width: 136px;
      padding: 6px 12px;
      :hover {
        color: white;
        background-color: tomato;
      }
    }
  }
`
