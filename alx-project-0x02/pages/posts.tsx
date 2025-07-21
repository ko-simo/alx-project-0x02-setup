import React from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

export default function Posts({ posts }: PostsPageProps) {
  return (
    <div>
      <Head>
        <title>Posts - ALX Project 0x02</title>
        <meta name="description" content="Posts page with API data" />
      </Head>

      <Header />

      <main className="p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Posts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 60, // Optional: re-generate page every 60 seconds
  };
}
