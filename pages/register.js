import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import RegisterContainer from '../components/RegisterContainer';

export default function login() {
  return (
    <div className={styles.screen}>
      <Head>
        <title>Register </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <RegisterContainer />
      </main>

      <footer className={styles.footer} />
    </div>
  );
}
