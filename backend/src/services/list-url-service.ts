import type { ShortUrl } from "../types/common/urls-types"
import { UrlRepositoryMongoose } from "../repositories/url-repository-moongose"

export class ListUrlService {
    async execute(shortUrl: ShortUrl) {
        if (!shortUrl) return null

        const repository = new UrlRepositoryMongoose()
        const result = await repository.findOne(shortUrl)

        return result
    }
}