import type { Config } from "drizzle-kit"
import dotenv from "dotenv"
dotenv.config({ path: ".env.local" })

export default {
  schema: './db/*',
  out: './drizzle',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  }
} satisfies Config
