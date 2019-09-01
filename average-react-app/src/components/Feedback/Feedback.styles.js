import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-family: Helvetica, Arial, sans-serif;
  margin: 3rem auto;
  max-width: 300px;
  text-align: center;
`

const Label = styled.label`
  font-size: 1.25rem;
`

const Textarea = styled.textarea`
  border-radius: 20px;
  border: 2px solid black;
  box-sizing: border-box;
  font-family: inherit;
  height: 150px;
  margin: 0.5rem auto;
  padding: 0.75rem;
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;

  &:focus,
  &:active {
    border: 2px solid #4287f5;
    background-color: #f2f6fc;
  }
`

const Button = styled.button`
  background-color: black;
  border: 2px solid black;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  margin: 0.25rem auto;
  padding: 0.5rem 1rem;
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  text-transform: uppercase;

  &:hover,
  &:focus,
  &:active {
    transform: scale(1.1);
  }

  &:focus {
    border: 3px solid #4287f5;
  }
`

export { Button, Form, Label, Textarea }
