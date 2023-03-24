import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch('/api/words')

  type Words = { words: string[] }
  const words: Words = await response.json()

  return { words }
}
