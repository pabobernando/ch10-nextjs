/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import Head from 'next/head';
import Game from '../../components/Game';
import styles from '../../styles/Home.module.css';

export default function reactPaperScissors() {
  return (
    <div>
      <Head>
        <title>Rock Paper Scissor</title>
      </Head>
      <main className={styles.main}>
        <Game />
      </main>
    </div>
  );
}
