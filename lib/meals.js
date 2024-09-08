import sql from "better-sqlite3";

const db = sql("meals.db");

// we can use async await in here
export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // example to  simulates an action that takes longer

  throw new Error("Loading meals failed");
  return db.prepare("SELECT * FROM meals").all();
}
