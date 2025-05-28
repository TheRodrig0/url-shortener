import type { BuildAppPropsInterface } from "./types/build-app-props-interface"

export const buildApp = async ({
    app,
    cors,
    rateLimit,
    routes,
    listenPort
}: BuildAppPropsInterface): Promise<void> => {
    try {
        await app.register(cors)
        if (rateLimit) {
            await app.register(rateLimit.instance, rateLimit.options)
        }
        await app.register(routes)

        app.listen({ port: listenPort || Number(process.env.SERVER_PORT) || 3000 })
    } catch (error) {
        process.exit(1)
    }
}