import type { ServerPropsInterface } from "../types/server-props-interface"
import { ListUrlController } from "../controllers/list-url-controller"
import { v1routes } from "./v1"
import { shortUrlSchema } from "../schemas/short-url-schema"

export const routes = async (app: ServerPropsInterface) => {
    app.register(v1routes, { prefix: '/api/v1' })

    app.get("/:shortUrl", async (request, reply) => {
        const validation = shortUrlSchema.safeParse(request.params)

        if (!validation.success) {
            if (reply.status) reply.status(400)
            return reply.send({
                error: validation.error.format()
            })
        }

        if (reply.status) reply.status(201)
            
        return new ListUrlController()
            .handle(request, reply)
    })
}

export default routes