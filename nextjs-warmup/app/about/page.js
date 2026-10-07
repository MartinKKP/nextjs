import Link from 'next/link';

export default function About() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>About Me</h1>
      <p>Hi, I am Martin, learning Next.js and building awesome web apps!</p>
      <Link href="/">Back to Home</Link>
    </main>
  );
}