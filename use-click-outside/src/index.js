import { useState, useEffect } from 'react'

export function useClickOutside({ initialValue, elementId, appId }) {
  const [open, setOpen] = useState(initialValue)

  useEffect(() => {
    function handleClick(e) {
      // Chrome uses e.path while Firefox uses e.composedPath()
      // Returns an array of elements in the path of the click
      const path = e.path || e.composedPath()
      const isClickInside = path.some(element => element.id === elementId)
      isClickInside
        ? console.log(`clicked inside ${elementId}`)
        : setOpen(false)
    }
    const app = `#${appId}`
    document.querySelector(app).addEventListener('click', handleClick, false)

    return () => {
      document
        .querySelector(app)
        .removeEventListener('click', handleClick, false)
    }
  }, [setOpen, elementId, appId])

  return [open, setOpen]
}
