import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(
  "postgresql://neondb_owner:m1iJTwnHpvI6@ep-gentle-dawn-a2qh3ogp.eu-central-1.aws.neon.tech/Spendify?sslmode=require"
);
export const db = drizzle(sql, { schema });
