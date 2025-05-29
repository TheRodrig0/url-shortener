import type { ServerRequestInterface } from "../types/common/server-request-interface"
import type { ServerReplyInterface } from "../types/common/server-reply-interface"
import { ListUrlService } from "../services/list-url-service"

export class ListUrlController {
    async handle(request: ServerRequestInterface, reply: ServerReplyInterface) {
        const shortUrl = request.query?.shortUrl || request.params?.shortUrl

        if (!shortUrl || shortUrl.length <= 0) {
            if (reply.status) reply.status(400)
            return reply.send({ error: "URL inválida" })
        }

        const listUrlService = new ListUrlService()
        const result = await listUrlService.execute(shortUrl)

        if (!result) {
            if (reply.status) reply.status(404)
            return reply.send({ error: "URL não encontrada" })
        }

        if (reply.status) reply.status(201)
        return reply.send({ url: result })
    }
}