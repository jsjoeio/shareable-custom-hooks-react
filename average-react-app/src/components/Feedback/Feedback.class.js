import React from 'react'
import { Form, Label, Textarea, Button, Title } from './Feedback.styles'

export class FeedbackClassComponent extends React.Component {
  state = {
    text: ''
  }

  componentDidMount() {
    // Get placeholder text
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => this.setState({
        text: data.value
      }))
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault()
    console.log(`Submitting response to API: "${this.state.text}"`)
    this.setState({
      text: ''
    })
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
        <Title>Class Example</Title>
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
