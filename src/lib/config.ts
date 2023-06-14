import { z } from "zod";

enum NodeEnv {
    production = "production",
    development = "development",
}

export const ConfigSchema = z.object({
    NODE_ENV: z.nativeEnum(NodeEnv),
    PORT: z.coerce.number().default(5000),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    DB_NAME: z.string(),
    DB_PORT: z.coerce.number(),
});

export const config = ConfigSchema.parse(process.env);
