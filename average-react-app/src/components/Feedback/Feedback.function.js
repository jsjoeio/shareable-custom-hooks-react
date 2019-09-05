import React, { useState, useEffect } from 'react'
import { Form, Label, Textarea, Button, Title } from './Feedback.styles'

export function FeedbackFunctionComponent(props) {
  const [text, setText] = useState('')

  useEffect(() => {
    async function getJoke() {
      const response = await fetch('https://api.chucknorris.io/jokes/random')
      const { value } = await response.json()
      setText(value)
    }
    getJoke()
    console.log('Logging from the feedback function component')
  }, [])

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault()
    console.log(`Submitting response to API: "${text}"`)
    setText('')
  }
  // Update text in state onchange for textarea
  function handleTextChange(e) {
    const updatedText = e.target.value
    setText(updatedText)
  }
  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <Title>Function Example</Title>
      <Label>
        Have feedback for our team? <br /> Let us know here 👇
        <Textarea value={text} onChange={e => handleTextChange(e)} />
      </Label>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
