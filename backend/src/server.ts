import { configDotenv } from "dotenv"
import fastify from "fastify"
import cors from "@fastify/cors"
import routes from "./routes"
import { buildApp } from "./build-app"
import type { ServerPropsInterface } from "./types/server-props-interface"
import mongoose from "mongoose"
import rateLimit from "@fastify/rate-limit"

configDotenv()

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL not defined in .env file")
}

async function connectDatabase() {
    try {
        await mongoose.connect(process.env.DATABASE_URL as string)
        console.log("Successfully connected to MongoDB!")
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error)
        process.exit(1)
    }
}

const app = fastify({ logger: true }) as unknown as ServerPropsInterface

const rateLimitConfig = {
    instance: rateLimit,
    options: {
        max: 100,
        timeWindow: "1 second"
    }
}

buildApp({
    app,
    cors,
    routes,
    rateLimit: rateLimitConfig,
    listenPort: Number(process.env.PORT) || 3000
})

connectDatabase()

process.on("SIGINT", async () => {
    await mongoose.disconnect()
    process.exit(0)
})

export default async (req: any, res: any) => {
    await app.ready()
    app.server.emit('request', req, res)
}
