import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/dbconnection";
import { revalidatePath } from "next/cache";

export default async function Profile() {
  const user = await currentUser();

  const userInfo = await db.query(`SELECT * FROM moodusers WHERE userID = $1`, [
    user.id,
  ]);
  const uIw = userInfo.rows;

  async function handleSaveUser(formData) {
    "use server";
    const name = user.firstName;
    const bio = formData.get("bio");
    const userID = user.id;
    const joinDate = new Date(user.createdAt);

    await db.query(
      `INSERT INTO moodusers (userID, user_name, bio, join_date) VALUES ($1, $2, $3, $4) ON CONFLICT (userID) DO UPDATE SET bio = EXCLUDED.bio;`,
      [userID, name, bio, joinDate]
    );

    revalidatePath("/profile");
  }
  return (
    <>
      <div className="profilePage">
        <h1 className="profileTitle">profile page</h1>

        {uIw.map((item) => {
          return (
            <>
              <div key={item.id} className="profileContainer">
                <div className="flex flex-col justify-start">
                  <p className="profileElement p-5">
                    Username: <br /> {user.username} <br /> <br />
                    join date: <br />{" "}
                    {new Date(user.createdAt).toLocaleDateString()} <br />{" "}
                    <br />
                    Bio: <br /> {item.bio}
                  </p>
                </div>

                <div className="flex flex-row just">
                  <p className="profileElement profileMood">
                    Current Mood: <br /> {item.current_mood}
                  </p>
                </div>
              </div>
            </>
          );
        })}
        <div className="flex text-center justify-center">
          <div className="profileEditButton flex text-center justify-center">
            <details>
              <summary className="cursor-pointer font-semibold mb-2 bg-blue-950 rounded-4xl p-2 text-center">
                edit bio
              </summary>
              <form action={handleSaveUser}>
                <label htmlFor="bio">bio:</label>
                <textarea id="bio" type="text" name="bio" required />
                <button className="biosave" type="submit">
                  save bio
                </button>
              </form>
            </details>
          </div>
        </div>
      </div>
    </>
  );
}
