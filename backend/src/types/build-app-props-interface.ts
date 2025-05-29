import type { ServerPropsInterface } from "./server-props-interface"

export interface BuildAppPropsInterface {
    app: ServerPropsInterface
    cors: any
    routes: any
    listenPort?: number
    rateLimit?: {
        instance: any
        options: object
    }
}
