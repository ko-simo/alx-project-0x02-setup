import Head from 'next/head';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ALX Project 0x02</title>
        <meta name="description" content="Welcome to ALX Next.js Setup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="p-8 text-center">
        <h2 className="text-3xl font-semibold">
          👋 أهلاً بك في مشروع ALX باستخدام Next.js!
        </h2>
      </main>
    </div>
  );
}

