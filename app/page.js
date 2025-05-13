import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Shopping List</h1>
      <Link href="/week-2" className="text-2xl text-cyan-600 hover:text-cyan-400">Week 2</Link>
  </main>
);
}
