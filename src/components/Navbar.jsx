import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="flex m-5">
        <div>
          <p className="ml-10 bg-purple-600 rounded-xl">navigation</p>
        </div>
        <div>
          <Link className="nav" href="/">
            home
          </Link>
          <Link className="nav" href="/profile">
            profile
          </Link>
          <Link className="nav" href="/">
            feed
          </Link>
          <Link className="nav" href="/">
            connections
          </Link>
        </div>
      </div>
    </>
  );
}
