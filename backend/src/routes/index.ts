import { ServerPropsInterface } from "../types/server-props-interface"
import { ServerRequestInterface } from "../types/server-request-interface"
import { ServerReplyInterface } from "../types/servers-reply"
import { v1routes } from "./v1"

export const routes = async (app: ServerPropsInterface) => {
    app.register(v1routes, { prefix: '/api/v1' })

    app.get("/:shortUrl", async (request: ServerRequestInterface, reply: ServerReplyInterface) => {

    })
}

export default routes