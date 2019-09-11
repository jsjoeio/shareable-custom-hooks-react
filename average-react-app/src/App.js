import React from 'react'
import { Container, InnerContainer } from './App.styles'
import { FeedbackClassComponent } from './components/Feedback/Feedback.class'

function App() {
  return (
    <Container id="average-react-app">
      <h1>Fake Web App</h1>
      <InnerContainer>
        <FeedbackClassComponent />
      </InnerContainer>
    </Container>
  )
}

export default App
