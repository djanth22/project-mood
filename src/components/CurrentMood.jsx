import { db } from "@/utils/dbconnection";
import { currentUser } from "@clerk/nextjs/server";
export default async function CurrentMood() {
  const user = await currentUser();
  const moodchoice = await db.query(
    "SELECT current_mood FROM moodusers WHERE userid = $1;",
    [user.id]
  );
  const mood = moodchoice.rows[0];
  const mc = mood.current_mood;

  return (
    <>
      <p>{mc}</p>
    </>
  );
}
