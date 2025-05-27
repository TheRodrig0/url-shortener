import type { ServerPropsInterface } from "./types/server-props-interface"

export const buildApp = async ({ app, cors, routes }:
    { app: ServerPropsInterface, cors: Function, routes: Function }): Promise<void> => {
    try {
        await app.register(cors)
        await app.register(routes)
        app.listen({ port: Number(process.env.SERVER_PORT) || 3000 })

    } catch (error) {
        process.exit(1)
    }
}