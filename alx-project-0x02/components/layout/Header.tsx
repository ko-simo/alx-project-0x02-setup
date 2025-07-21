export default Header;
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const linkClass = (path: string) =>
    router.pathname === path
      ? 'text-white font-bold border-b-2 border-white'
      : 'text-white hover:text-gray-200';

  return (
    <header className="bg-blue-600 shadow-md p-4">
      <nav className="container mx-auto flex space-x-8">
        <Link href="/home">
          <a className={linkClass('/home')}>Home</a>
        </Link>
        <Link href="/about">
          <a className={linkClass('/about')}>About</a>
        </Link>
        <Link href="/posts">
          <a className={linkClass('/posts')}>Posts</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
