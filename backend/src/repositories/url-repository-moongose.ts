import type { OriginalUrl, ShortUrl } from "../types/common/urls-types"
import type { UrlRepositoryInterface } from "../types/url-repository-interface"
import type { UrlDocumentInterface } from "../types/url-document-interface"
import mongoose, { Schema } from "mongoose"

const UrlMongooseSchema = new Schema<UrlDocumentInterface>({
    originalUrl: { type: String, required: true },
    shortUrl: { type: String, required: true, unique: true }
})

const MongooseUrlModel = mongoose.model<UrlDocumentInterface>("Url", UrlMongooseSchema)

export class UrlRepositoryMongoose implements UrlRepositoryInterface {
    async create(data: { originalUrl: OriginalUrl, shortUrl: ShortUrl }): Promise<ShortUrl | null> {
        const { originalUrl, shortUrl } = data

        if (!originalUrl || !shortUrl) return null

        const existing = await MongooseUrlModel.findOne({ originalUrl }).lean()
        if (existing) return existing.shortUrl

        const urls = await MongooseUrlModel.create({ originalUrl, shortUrl })
        if (!urls) return null

        return urls.shortUrl as ShortUrl || null
    }

    async findOne(shortUrl: ShortUrl): Promise<OriginalUrl | null> {
        if (!shortUrl) return null

        const urls = await MongooseUrlModel.findOne({ shortUrl }).lean()
        if (!urls) return null

        return urls.originalUrl as OriginalUrl || null
    }
}