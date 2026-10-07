import Link from 'next/link';
import Counter from './components/Counter';
import MessageLoader from './components/MessageLoader';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Welcome to Next.js Warm-up</h1>
      <p>This is the home page.</p>
      
      {/* Navigation link */}
      <p><Link href="/about">Go to About Page</Link></p>

      {/* Interactive Counter Component */}
      <Counter />

      {/* Backend API Message Loader Component */}
      <MessageLoader />
    </main>
  );
}