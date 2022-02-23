import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css';
import EditContainer from '../../components/EditContainer'

function edit() {
    return (
        <div>
            <Head>
                <title>Edit Profile</title>
            </Head>
            <main className={styles.main}>
                <EditContainer/>
            </main>
        </div>
    )
}

export default edit;
