import type { ServerRequestInterface } from "./common/server-request-interface"
import type { ServerReplyInterface } from "./common/server-reply-interface"
import { Server } from "http"

export interface ServerPropsInterface {
    register: (plugin: any, opts?: any) => any
    listen: (opts: { port: number },
        callback?: (err: Error | null, address?: string) => void) => void
    get: (path: string, config: (request: ServerRequestInterface, reply: ServerReplyInterface) => any) => any
    post: (path: string, config: (request: ServerRequestInterface, reply: ServerReplyInterface) => any) => any
    ready: () => Promise<void>
    server: Server
}