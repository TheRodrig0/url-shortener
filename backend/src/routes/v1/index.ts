import type { ServerPropsInterface } from "../../types/server-props-interface"
import { CreateUrlController } from "../../controllers/create-url-controller"
import { createUrlSchema } from "../../schemas/create-url-schema"


export const v1routes = (app: ServerPropsInterface) => {
    app.register(async (app: ServerPropsInterface) => {
        app.post("/shorten", async (request, reply) => {
            const validation = createUrlSchema.safeParse(request.body)

            if (!validation.success) {
                if (reply.status) reply.status(400)
                return reply.send({
                    error: validation.error.format()
                })
            }

            const result = await new CreateUrlController()
            .handle(request, reply)
            
            if (reply.status) reply.status(201)
            return result
        })
    })
}