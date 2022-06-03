import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a onClick={() => localStorage.setItem("refferer", location.href)}>
          Go to PyScript
        </a>
      </Link>
      <br />
      <Link href="/pythonRepl">
        <a onClick={() => localStorage.setItem("refferer", location.href)}>
          Go to Python Repl
        </a>
      </Link>
      <style jsx>
        {`
          a {
            background-color: black;
            color: white;
          }
        `}
      </style>
    </nav>
  );
}
