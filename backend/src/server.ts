import { configDotenv } from "dotenv"
import fastify from "fastify"
import cors from "@fastify/cors"
import routes from "./routes"
import { buildApp } from "./build-app"
import type { ServerPropsInterface } from "./types/server-props-interface"

configDotenv()

const app = fastify({ logger: true }) as unknown as ServerPropsInterface
buildApp({ app, cors, routes })