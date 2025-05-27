import { configDotenv } from "dotenv"
import fastify from "fastify"
import cors from "@fastify/cors"
import routes from "./routes"
import { buildApp } from "./build-app"

configDotenv()

const app = fastify({ logger: true })
buildApp({ app, cors, routes })