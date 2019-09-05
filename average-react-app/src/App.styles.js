import styled from 'styled-components'

const Container = styled.main`
  // max-width: 690px;
  margin: 3rem auto;
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
`
const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export { Container, InnerContainer }