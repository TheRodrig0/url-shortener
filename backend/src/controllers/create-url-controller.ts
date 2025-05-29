import type { ServerRequestInterface } from "../types/common/server-request-interface"
import type { ServerReplyInterface } from "../types/common/server-reply-interface"
import { CreateUrlService } from "../services/create-url-service"
import { nanoid } from "nanoid"

export class CreateUrlController {
    async handle(request: ServerRequestInterface, reply: ServerReplyInterface) {
        const { originalUrl } = request.body

        const shortUrl = nanoid(10)
        const createUrlService = new CreateUrlService()
        const result = await createUrlService.execute({ originalUrl, shortUrl })

        if (!result) {
            if (reply.status) reply.status(400)
            return reply.send({
                error: "Invalid URL"
            })
        }

        if (reply.status) reply.status(201)
        return reply.send({
            message: "success",
            shortUrl: result

        })
    }
}