import Head from 'next/head';
import React from 'react';
import ListUserContainer from '../../components/ListUserContainer';
import styles from '../../styles/Home.module.css';

const List = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>List User</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ListUserContainer />
      </main>

    <footer className={styles.footer} />
  </div>
);
}

export default List;
