import { ListOriginalUrlService } from "../services/list-original-url-service"

export class ListOriginalUrlController {
    async handle(apiUrl, shortUrl) {
        return await new ListOriginalUrlService()
            .execute(apiUrl, shortUrl)
    }
}