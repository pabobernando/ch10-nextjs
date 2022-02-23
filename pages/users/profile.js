import React from 'react';
import Head from 'next/head';
import ProfileContainer from '../../components/ProfileContainer';

function profile() {
  return (
    <div>
      <Head>
        <title>Profile</title>
      </Head>
      <main className="main-screen">
        <ProfileContainer />
      </main>
    </div>
  );
}

export default profile;
