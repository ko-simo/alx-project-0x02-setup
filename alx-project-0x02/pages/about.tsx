import React from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

export default function About() {
  return (
    <div>
      <Head>
        <title>About - ALX Project 0x02</title>
        <meta name="description" content="About page with reusable buttons" />
      </Head>

      <Header />

      <main className="p-8 text-center space-y-6">
        <h2 className="text-3xl font-bold">Buttons with Different Sizes and Shapes</h2>

        <div className="space-x-4">
          <Button size="small" shape="rounded-sm">Small Rounded-sm</Button>
          <Button size="medium" shape="rounded-md">Medium Rounded-md</Button>
          <Button size="large" shape="rounded-full">Large Rounded-full</Button>
        </div>
      </main>
    </div>
  );
}
