import React from 'react';
import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import LoginContainer from '../components/LoginContainer';

export default function login() {
  return (
    <div className="screen">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <LoginContainer />
      </main>

      <footer className="footer" />
    </div>
  );
}
