import App from "next/app";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store, persistor } from "../store";
import Layout from "../components/Layout";
import { PersistGate } from "redux-persist/integration/react";
import "video-react/dist/video-react.css";
import "bootstrap/dist/css/bootstrap.min.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    );
  }
}

export default MyApp;
