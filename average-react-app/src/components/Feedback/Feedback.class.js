import React from 'react'
import { Form, Label, Textarea, Button } from './Feedback.styles'

export class FeedbackClassComponent extends React.Component {
  state = {
    text: ''
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault()
    console.log(`Submitting response to API: "${this.state.text}"`)
  }
  // Update text in state onchange for textarea
  handleTextChange(e) {
    const updatedText = e.target.value

    this.setState({
      text: updatedText
    })
  }

  render() {
    return (
      <Form onSubmit={e => this.handleSubmit(e)}>
        <Label>
          Have feedback for our team? <br /> Let us know here 👇
          <Textarea
            value={this.state.text}
            onChange={e => this.handleTextChange(e)}
          />
        </Label>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}
