import React from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - ALX Project 0x02</title>
        <meta name="description" content="Home page with reusable cards" />
      </Head>

      <Header />

      <main className="p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Reusable Cards</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Card One" content="This is the content of card one." />
          <Card title="Card Two" content="This is the content of card two." />
          <Card title="Card Three" content="Here is some more content for the third card." />
        </div>
      </main>
    </div>
  );
}
