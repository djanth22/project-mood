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
            tab1
          </Link>
          <Link className="nav" href="/">
            tab2
          </Link>
          <Link className="nav" href="/">
            tab3
          </Link>
          <Link className="nav" href="/">
            tab4
          </Link>
        </div>
      </div>
    </>
  );
}
