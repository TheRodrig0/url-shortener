import { OriginalUrl, ShortUrl } from "./common/urls-types"

export interface UrlRepositoryInterface {
    create(data: { originalUrl: OriginalUrl, shortUrl: ShortUrl}): Promise<ShortUrl | null>
    findOne(shortUrl: ShortUrl): Promise<OriginalUrl | null>
}
