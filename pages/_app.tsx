import App, { Container } from 'next/app';
import React from 'react';
import { GlobalStyle } from '../style/GlobalStyled';

class ReactApp extends App<any> {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyle/>
          <Component {...pageProps}/>
      </Container>
    );
  }
}

export default ReactApp;