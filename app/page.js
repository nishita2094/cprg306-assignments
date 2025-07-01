import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2</h1>
      <Link href="/week-2" className="text-2xl text-cyan-600 hover:text-cyan-400">Week 2</Link>
      <Link href="/week-3" className="text-2xl text-cyan-600 hover:text-cyan-400">Week 3</Link>
      <Link href="/week-4" className="text-2xl text-cyan-600 hover:text-cyan-400">Week 4</Link>
      <Link href="/week-5" className="text-2xl text-cyan-600 hover:text-cyan-400">Week 5</Link>
      <Link href="/week-6" className="text-2xl text-cyan-600 hover:text-cyan-400">Week 6</Link>
      <Link href="/week-7" className="text-2xl text-cyan-600 hover:text-cyan-400">Week 7</Link>
    </main>
  );
}
