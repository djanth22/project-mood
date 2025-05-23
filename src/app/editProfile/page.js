import { db } from "@/utils/dbconnection";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default async function EditProfile() {
  const user = await currentUser();

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

    revalidatePath("/editProfile");
  }
  return (
    <>
      <h1>edit page. form here for user to edit details</h1>
      <p className="text-center">username: {user.username}</p>
      <p className="text-center">
        joined: {new Date(user.createdAt).toLocaleDateString()}
      </p>
      <p className="text-center"> name: {user.fullName}</p>
      <form action={handleSaveUser}>
        <label htmlFor="bio">bio:</label>
        <textarea id="bio" type="text" name="bio" required />
        <button type="submit">save user profile</button>
      </form>
    </>
  );
}
