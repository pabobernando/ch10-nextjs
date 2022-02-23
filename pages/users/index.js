import Head from 'next/head';
import React from 'react';
import UserContainer from '../../components/UserContainer';
import styles from '../../styles/Home.module.css';

const Index = () => (
  <div className={styles.container}>
    <Head>
      <title>Dashboard</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <UserContainer />
    </main>

    <footer className={styles.footer} />
  </div>
);

export default Index;
