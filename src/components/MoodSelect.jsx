import { db } from "@/utils/dbconnection";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default async function MoodSelect() {
  const choices = await db.query("SELECT * FROM moods;");
  const cIw = choices.rows;
  const user = await currentUser();

  return (
    <>
      <div className="options-container">
        <details>
          <summary className="cursor-pointer font-semibold mb-2 bg-blue-950 rounded-4xl p-2 text-center">
            Show/hide all mood options
          </summary>
          {cIw.map((item) => {
            return (
              <div className="select-options" key={item.id}>
                <p>{item.name}</p>
                <button
                  className="selectButton"
                  onClick={async () => {
                    "use server";
                    await db.query(
                      "UPDATE moodusers SET current_mood = $1 WHERE userid = $2;",
                      [item.name, user.id]
                    );
                    revalidatePath("/");
                  }}
                >
                  Select
                </button>
              </div>
            );
          })}
        </details>
      </div>
    </>
  );
}
