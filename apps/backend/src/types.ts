import { categoriesTable } from "../drizzle/schema/categories";

export type Category = typeof categoriesTable.$inferInsert;
