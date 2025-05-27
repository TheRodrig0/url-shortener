import { CreateUrlController } from "../../controllers/create-url-controller"
import { ServerPropsInterface } from "../../types/server-props-interface"
import { ServerRequestInterface } from "../../types/server-request-interface"
import { ServerReplyInterface } from "../../types/servers-reply"

export const v1routes = (app: ServerPropsInterface) => {
    app.register(async (app: ServerPropsInterface) => {
        app.post("/", async (request: ServerRequestInterface, reply: ServerReplyInterface) => {
            return await new CreateUrlController()
                .handle(request, reply)
        })
    })
}