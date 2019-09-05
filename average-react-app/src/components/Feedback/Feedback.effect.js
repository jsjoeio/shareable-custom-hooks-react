import React, { useState, useEffect } from 'react'
import { Title, Form, Label, Textarea, Button } from './Feedback.styles'

function useText(initialState) {
  return useState(initialState)
}

function useChuckNorris() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)
  const [data, setData] = useState(undefined)

  useEffect(() => {
    async function getJoke() {
      setLoading(true)
      const response = await fetch('https://api.chucknorris.io/jokes/random')
      const { value } = await response.json().catch(error => setError(error))
      setLoading(false)
      setData(value)
    }
    getJoke()
  }, [])
  return { data, loading, error }
}

export function FeedbackEffectHookComponent(props) {
  const [text, setText] = useText('')
  const { data, loading, error } = useChuckNorris()

  useEffect(() => {
    if (data) setText(data)
  }, [data, setText])

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

  if (loading) return <Form><p>Loading...</p></Form>
  if (error) return <p>{error}</p>

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <Title>Effect Hook Example</Title>
      <Label>
        Have feedback for our team? <br /> Let us know here 👇
        <Textarea value={text} onChange={e => handleTextChange(e)} />
      </Label>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
