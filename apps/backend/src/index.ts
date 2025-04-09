import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";
import { categoriesTable } from "../drizzle/schema/categories";
import { Category } from "./types";

const app = new Hono<{ Bindings: { DB: D1Database } }>().basePath("/api");

app.get("/", async (c) => {
  try {
    const db = drizzle(c.env.DB);
    const res = await db.select().from(categoriesTable);
    if (res.length === 0) {
      return c.json({ message: "登録データがありません" }, 404);
    }
    return c.json(res);
  } catch (e) {
    return c.json({ error: e }, 500);
  }
});
app.get("/:id", async (c) => {
  try {
    const db = drizzle(c.env.DB);
    const id = Number(c.req.param("id"));
    const res = await db
      .select()
      .from(categoriesTable)
      .where(eq(categoriesTable.id, id));
    if (res.length === 0) {
      return c.json({ message: "登録データがありません" }, 404);
    }
    return c.json(res);
  } catch (e) {
    return c.json({ error: e }, 500);
  }
});
app.post("/", async (c) => {
  try {
    const db = drizzle(c.env.DB);
    const { name } = await c.req.json<Category>();
    await db.insert(categoriesTable).values({ name });
    return c.json({ message: "データを追加しました" }, 201);
  } catch (e) {
    return c.json({ error: e }, 500);
  }
});
app.put("/:id", async (c) => {
  try {
    const db = drizzle(c.env.DB);
    const id = Number(c.req.param("id"));
    const { name } = await c.req.json<Category>();
    await db
      .update(categoriesTable)
      .set({ name })
      .where(eq(categoriesTable.id, id));
    return c.json({ message: "データを更新しました" }, 200);
  } catch (e) {
    return c.json({ error: e }, 500);
  }
});
app.delete("/:id", async (c) => {
  try {
    const db = drizzle(c.env.DB);
    const id = Number(c.req.param("id"));
    await db.delete(categoriesTable).where(eq(categoriesTable.id, id));
    return c.json({ message: "データを削除しました" }, 200);
  } catch (e) {
    return c.json({ error: e }, 500);
  }
});

export default app;
