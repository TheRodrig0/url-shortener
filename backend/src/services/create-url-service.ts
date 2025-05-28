import type { OriginalUrl, ShortUrl } from "../types/common/urls-types"
import { UrlRepositoryMongoose } from "../repositories/url-repository-moongose"

export class CreateUrlService {
    async execute(data: { originalUrl: OriginalUrl, shortUrl: ShortUrl }){
        const { originalUrl, shortUrl } = data
        if (!originalUrl || !shortUrl) return null

        const repository = new UrlRepositoryMongoose()
        const result = await repository.create({ originalUrl, shortUrl })

        return result
    }
}