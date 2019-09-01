import React, { useState } from 'react'
import { Form, Label, Textarea, Button } from './Feedback.styles'

export function FeedbackFunctionComponent(props) {
  const [text, setText] = useState('')

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault()
    console.log(`Submitting response to API: "${text}"`)
  }
  // Update text in state onchange for textarea
  function handleTextChange(e) {
    const updatedText = e.target.value
    setText(updatedText)
  }
  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <Label>
        Have feedback for our team? <br /> Let us know here 👇
        <Textarea value={text} onChange={e => handleTextChange(e)} />
      </Label>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
