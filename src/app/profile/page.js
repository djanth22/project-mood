import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/dbconnection";

export default async function Profile() {
  const user = await currentUser();

  const userInfo = await db.query(`SELECT * FROM moodusers WHERE userID = $1`, [
    user.id,
  ]);
  const uIw = userInfo.rows;
  return (
    <>
      <div className="profilePage">
        <h1 className="profileTitle">profile page</h1>

        {uIw.map((item) => {
          return (
            <>
              <div key={item.id} className="profileContainer">
                <p className="profileElement">
                  Username: <br /> {user.username}
                </p>
                <p className="profileElement">
                  Bio: <br /> {item.bio}
                </p>
                <p className="profileElement profileMood">
                  Current Mood: <br /> {item.current_mood}
                </p>
              </div>
            </>
          );
        })}
        <div className="flex text-center justify-center">
          <div className="profileEditButton flex text-center justify-center">
            <Link href="/editProfile">Edit profile</Link>
          </div>
        </div>
      </div>
    </>
  );
}
