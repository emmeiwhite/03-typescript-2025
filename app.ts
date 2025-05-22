/** --- 3. GENERICS FETCH EXAMPLE --- */

interface IPost {
  title: string
  id: number
  description: string
}

async function fetchPosts(path: string): Promise<IPost[]> {
  const response = await fetch(`http://example.com${path}`)
  return response.json()
}

;(async () => {
  const posts = await fetchPosts('/posts')
  posts[0]
})()
