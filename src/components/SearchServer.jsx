import { db } from "@/utils/dbconnection";
import { revalidatePath } from "next/cache";
import { currentUser } from "@clerk/nextjs/server";

async function updateMood(formData) {
  "use server";

  const user = await currentUser();

  const selectedMood = formData.get("selectedMood");
  const userId = user.id;

  if (!selectedMood || !userId) return;

  await db.query("UPDATE moodusers SET current_mood = $1 WHERE userid = $2;", [
    selectedMood,
    userId,
  ]);

  revalidatePath("/");
}

export default async function SearchServer({ searchParams }) {
  const search = searchParams?.search || "";

  //   modify this line below for the connections search  bar, replace ILIKE for = and remove both % for exact search
  const result = (await search)
    ? await db.query("SELECT * FROM moods WHERE name ILIKE $1", [`%${search}%`])
    : { rows: [] };

  return (
    <div>
      <details>
        <summary className="cursor-pointer font-semibold mb-2 bg-blue-950 rounded-4xl p-2 text-center">
          search moods
        </summary>
        <form method="GET">
          <input
            name="search"
            placeholder="Search moods..."
            defaultValue={search}
          />
          <button className="selectButton" type="submit">
            Search
          </button>
        </form>
      </details>

      {result.rows.length > 0 && (
        <ul className="options-container flex-col">
          {result.rows.map((mood) => (
            <li className="select-options" key={mood.id}>
              <p>{mood.name}</p>
              <form action={updateMood}>
                <input type="hidden" name="selectedMood" value={mood.name} />
                <button className="selectButton" type="submit">
                  Select
                </button>
              </form>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
