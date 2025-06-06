import { CreateShortUrlService } from "../services/create-short-url-service"
import { validateUrlProtocol } from "../utils/validate-url-protocol"

export class CreateShortUrlController {
    async handle(apiUrl, originalUrl) {
        if (!validateUrlProtocol(originalUrl)) {
           return null
        }

        return await new CreateShortUrlService()
            .execute(apiUrl, originalUrl)
    }
}