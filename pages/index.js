import Head from 'next/head';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import VideoTutorialContainer from '../components/VideoTutorialContainer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="game" style={{ marginTop: '-5px' }} >
    <div className={styles.main_screen} style={{ overflow: 'hidden' }}>
      <Head>
        <title>Binar Chapter 10</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Row className={`d-flex justify-content-center ${styles.main_content}`}>
          <Col>
            <h1 className="text-light">PLAY TRADITIONAL GAME</h1>
            <h3 className="text-light">Experience new traditional game play</h3>
          </Col>
        </Row>
        <Row className={`d-flex justify-content-center ${styles.main_content}`} style={{ 'marginTop': '40px' }}>
          <VideoTutorialContainer />
        </Row>
      </Container>
    </div>
    </div>
  );
}
