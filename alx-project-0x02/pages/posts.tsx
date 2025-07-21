import React from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';

export default function Posts() {
  return (
    <div>
      <Head>
        <title>Posts - ALX Project 0x02</title>
        <meta name="description" content="Posts page" />
      </Head>

      <Header />

      <main className="p-8 text-center">
        <h2 className="text-3xl font-bold">Posts Page</h2>
        <p>Coming soon...</p>
      </main>
    </div>
  );
}
