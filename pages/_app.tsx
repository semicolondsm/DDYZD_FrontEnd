import App from 'next/app';
import Head from 'next/head';
import React from 'react';
class ReactApp extends App<any> {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>DDYZD</title>
        </Head>
        <Component {...pageProps}/>
      </>
    );
  }
}

export default ReactApp;