import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

export default function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <Head>
        <title>Posts - ALX Project 0x02</title>
        <meta name="description" content="Posts page with API data" />
      </Head>

      <Header />

      <main className="p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Posts</h2>

        {loading ? (
          <p className="text-center">Loading posts...</p>
        ) : (
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
        )}
      </main>
    </div>
  );
}
