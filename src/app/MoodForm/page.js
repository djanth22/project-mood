import { db } from "@/utils/dbconnection";
import { revalidatePath } from "next/cache";

export default async function MoodForm() {
  async function handleSaveMood(formData) {
    "use server";
    const moodname = formData.get("moodname");
    const moodcat = formData.get("category");

    await db.query(
      `INSERT INTO moods (name, category) VALUES ($1, $2) ON CONFLICT (name) DO NOTHING;`,
      [moodname, moodcat]
    );

    revalidatePath("/editProfile");
  }
  return (
    <>
      <h1>add mood</h1>
      <form action={handleSaveMood}>
        <label htmlFor="mood">mood:</label>
        <input id="moodname" type="text" name="moodname" required />
        <label htmlFor="category">category:</label>
        <input type="text" id="category" name="category" required />
        <button type="submit">add mood</button>
      </form>
    </>
  );
}
