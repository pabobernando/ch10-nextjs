/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  });

  return (
    <div>
      <h1>Oooooooops...</h1>
      <h2>This page doesn&apos;t exist.</h2>
      <p>
        Go back to the
        {' '}
        <Link href="/">
          <a>Homepage</a>
        </Link>
        {' '}
      </p>
    </div>
  );
};

export default NotFound;
