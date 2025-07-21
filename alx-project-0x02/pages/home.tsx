import React, { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

interface Post {
  title: string;
  content: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([
    { title: 'Card One', content: 'This is the content of card one.' },
    { title: 'Card Two', content: 'This is the content of card two.' },
    { title: 'Card Three', content: 'Here is some more content for the third card.' },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prev) => [{ title, content }, ...prev]);
  };

  return (
    <div>
      <Head>
        <title>Home - ALX Project 0x02</title>
        <meta name="description" content="Home page with reusable cards and modal" />
      </Head>

      <Header />

      <main className="p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Reusable Cards</h2>

        <div className="flex justify-center mb-6">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Add New Post
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onAddPost={handleAddPost}
        />
      </main>
    </div>
  );
}
