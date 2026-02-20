export const useWordpress = () => {
    const config = useRuntimeConfig()
    const baseUrl = config.wordpressBaseUrl as string || config.public.wordpressBaseUrl as string

    if (!baseUrl) {
        throw new Error('WordPress base URL is not configured')
    }

    const fetchFromWp = async <T>(endpoint: string, init?: RequestInit) => {
        const url = `${baseUrl.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}`
        return await $fetch<T>(url, {
          method: init?.method as 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | undefined || 'GET',
          headers: {
            'Content-Type': 'application/json',
            ...(init?.headers || {})
        } as HeadersInit
      })
    }

    const getPage = (slug: string) => useAsyncData(slug, async () => {
      const pages = await fetchFromWp<any[]>(`/wp-json/wp/v2/pages?slug=${slug}&_embed=1`)

      return pages[0]
    })

    const getMedia = (id: number) => useAsyncData(`media-${id}`, async () => {
      const media = await fetchFromWp<any>(`/wp-json/wp/v2/media/${id}`)
      console.log('media: ', media)

      return media
    })

    const submitForm = (formId: string) => useAsyncData(formId, async () => {
      
    })

    return {
        getPage,
        getMedia,
        submitForm
    }
}