export class ListOriginalUrlService {
    async execute(apiUrl, shortUrl) {
        try {
            if (apiUrl.length <= 0 || typeof apiUrl != "string") {
                throw new TypeError("Error: Invalid API URL format or empty URL provided")
            }

            if (shortUrl.length <= 0 || typeof shortUrl != "string") {
                throw new TypeError("Error: Invalid short URL format or empty URL provided")
            }

            const response = await fetch(`${apiUrl}/${shortUrl}`)
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'URL not found')
            }

            const originalUrl = data.url || data.originalUrl

            if (!originalUrl) {
                throw new Error('Original URL not found in response')
            }

            return originalUrl

        } catch (error) {
            console.error('Failed to fetch original URL:', error)
            return null
        }
    }
}