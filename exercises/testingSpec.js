import { renderHook } from '@testing-library/react-hooks'
import { useStarWarsQuote } from './'

describe('useStarWarsQuote', () => {
  test('should return an object with the keys: loading, quote', () => {
    const { result } = renderHook(() => useStarWarsQuote())

    expect(result.current).toHaveProperty('loading')
    expect(result.current).toHaveProperty('quote')
  })

  test('should set loading to true after initial call', () => {
    const { result } = renderHook(() => useStarWarsQuote())

    expect(result.current.loading).toBe(true)
  })

  test('should return a joke and set loading to false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useStarWarsQuote())

    expect(result.current.loading).toBe(true)

    await waitForNextUpdate()

    // By now we should have the quote
    expect(typeof result.current.quote).toBe('string')
    // Since it's a random string
    // We can only make generic assertions
    expect(result.current.quote).not.toBeNull()
    expect(result.current.quote).not.toBe('')
    // And loading should be set to false
    expect(result.current.loading).toBe(false)
  })
})