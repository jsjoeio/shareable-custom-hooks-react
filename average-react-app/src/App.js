import React from 'react'
import { Container } from './App.styles'
import { FeedbackClassComponent } from './components/Feedback/Feedback.class'
import { FeedbackFunctionComponent } from './components/Feedback/Feedback.function'

function App() {
  return (
    <Container id="average-react-app">
      <h1>Fake Web App</h1>
      <FeedbackClassComponent />
      <FeedbackFunctionComponent />
    </Container>
  )
}

export default App
