import React from 'react'
import { useMyHook } from '@jsjoeio/use-click-outside'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App