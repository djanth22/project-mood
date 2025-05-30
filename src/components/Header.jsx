import Navbar from "./Navbar";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { currentUser } from "@clerk/nextjs/server";

export default async function Header() {
  const user = await currentUser();

  return (
    <>
      <div className="flex m-4">
        <UserButton />
        <h2 className="m-2">{user.username}</h2>
      </div>

      <Navbar />
    </>
  );
}
