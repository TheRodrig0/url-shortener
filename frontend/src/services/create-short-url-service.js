export class CreateShortUrlService {
    async execute(apiUrl, originalUrl) {
        try {
            if (apiUrl.length <= 0 || typeof apiUrl != "string") {
                throw new TypeError("Error: Invalid API URL format or empty URL provided")
            }

            if (originalUrl.length <= 0 || typeof originalUrl != "string") {
                throw new TypeError("Error: Invalid original URL format or empty URL provided")
            }

            const response = await fetch(`${apiUrl}/api/v1/shorten`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ originalUrl })
            })

            const data = await response.json()
            return `${window.location.protocol}//${window.location.host}/${data.shortUrl}`

        } catch (error) {
            console.error('Failed to create short URL:', error)
            return null
        }

    }
}
