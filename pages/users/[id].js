import React from 'react';
import Head from 'next/head';
import DetailUser from '../../components/DetailUserContainer';

export default function DetailUserPage() {
  return (
    <div>
      <Head>
        <title>Detail User</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <DetailUser />
      </main>
    </div>
  );
}
