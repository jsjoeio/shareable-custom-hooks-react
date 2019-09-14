import React, { useState } from 'react'
import { Form, Label, Textarea, Button, Title } from './Feedback.styles'

function useFeedbackText(initialValue) {
  return useState(initialValue)
}

function useStarWarsQuote(initialValue) {
  const [quote, setQuote] = useState('')
  const [loading, setLoading] = useState(false)

  React.useEffect(() => {
    async function getStarsWarsQuote() {
      setLoading(true)
      // Get placeholder text
      const response = await fetch('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
      const data = await response.json()
      const quote = data.starWarsQuote
      setQuote(quote)
      setLoading(false)
    }
    getStarsWarsQuote()
  }, [setQuote])

  return { quote, loading }
}

export function FeedbackCustomComponent() {
  const [text, setText] = useFeedbackText('')
  // const [text, setText] = useState('')
  const { quote, loading } = useStarWarsQuote('')

  React.useEffect(() => {
    if (quote) {
      console.log(quote, 'quote he')
      setText(quote)
    }
  }, [quote, setText])
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

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (quote) {
    return (
      <Form onSubmit={e => handleSubmit(e)}>
        <Title>Custom Example</Title>
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

  return null
}
