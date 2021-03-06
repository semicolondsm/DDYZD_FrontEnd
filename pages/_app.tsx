import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import {SampleProvider} from '@/context/context'
import ReturnModal from '@/components/Public/Modals';
import { UserProvider } from '@/context/user';
import { onSilentRefresh } from './Callback';

class ReactApp extends App<any> {
  componentDidMount(){
    onSilentRefresh()
  }
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>DDYZD</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        </Head>
        <SampleProvider>
          <UserProvider>
          <ReturnModal></ReturnModal>
        <Component {...pageProps}/>
        </UserProvider>
        </SampleProvider>
      </>
    );
  }
}

export default ReactApp;