import Head from 'next/head';
import React from 'react';
import GameListContainer from '../../components/GameListContainer';
import styles from '../../styles/Home.module.css';

const gameList = () => (
  <div className={styles.container}>
    <Head>
      <title>Game List</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <GameListContainer />
    </main>

    <footer className={styles.footer} />
  </div>
);

export default gameList;
