import React from 'react'
import { Container } from './App.styles'
import { Feedback } from './components/Feedback/Feedback.class'
import { FeedbackFunctionComponent } from './components/Feedback/Feedback.function'

function App() {
  return (
    <Container id="average-react-app">
      <h1>Fake Dev App</h1>
      <Feedback />
      <FeedbackFunctionComponent />
    </Container>
  )
}

export default App
