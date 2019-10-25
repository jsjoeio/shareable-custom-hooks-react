import React, { useState } from 'react'
import { Form, Label, Textarea, Button, Title } from './Feedback.styles'

export function FeedbackFunctionComponent() {
  const [text, setText] = useState('')

  // componentDidMount() {
  //   // Get placeholder text
  //   fetch('https://starwars-quote-proxy-gi0d3x1lz.now.sh/api/randomQuote')
  //     .then(response => response.json())
  //     .then(data =>
  //       this.setState({
  //         text: data.starWarsQuote
  //       })
  //     )
  // }

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
          <Textarea
          value={text}
          onChange={e => handleTextChange(e)}
        />
      </Label>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
