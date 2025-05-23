import { db } from "@/utils/dbconnection";
import { revalidatePath } from "next/cache";

export default async function MoodForm() {
  async function handleSaveMood(formData) {
    "use server";
    const moodname = formData.get("moodname");

    await db.query(
      `INSERT INTO moods (name) VALUES ($1) ON CONFLICT (name) DO NOTHING;`,
      [moodname]
    );

    revalidatePath("/editProfile");
  }
  return (
    <>
      <h1>add mood</h1>
      <form action={handleSaveMood}>
        <label htmlFor="mood">mood:</label>
        <input id="moodname" type="text" name="moodname" required />
        <button type="submit">add mood</button>
      </form>
    </>
  );
}
