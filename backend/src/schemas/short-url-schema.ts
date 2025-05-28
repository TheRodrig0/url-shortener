import { z } from "zod"

export const shortUrlSchema = z.object({
    shortUrl: z.string()
        .min(1, "shortUrl is required")
        .regex(/^[a-zA-Z0-9_-]+$/, "shortUrl must be alphanumeric or contain '-' or '_'")
})