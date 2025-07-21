import React from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

interface UsersPageProps {
  users: UserProps[];
}

export default function Users({ users }: UsersPageProps) {
  return (
    <div>
      <Head>
        <title>Users - ALX Project 0x02</title>
        <meta name="description" content="Users page with API data" />
      </Head>

      <Header />

      <main className="p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Users</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

// Static generation to fetch users at build time
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
    revalidate: 60,
  };
}
