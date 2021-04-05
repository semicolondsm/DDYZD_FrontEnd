import App from "next/app";
import Head from "next/head";
import React from "react";
import { SampleProvider } from "@/src/context/context";
import ReturnModal from "@/src/components/Public/Modals";
import { UserProvider } from "@/src/context/user";
import { onSilentRefresh } from "./callback";
import { MenuProvider } from "@/src/context/menuProvider";

import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn:
    "https://f8554d59c1864fe283a494f7c139cce9@o542644.ingest.sentry.io/5670863",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

class ReactApp extends App<any> {
  componentDidMount() {
    localStorage.refreshToken && onSilentRefresh();
  }
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>DDYZD</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          />
        </Head>
        <SampleProvider>
          <UserProvider>
            <MenuProvider>
              <ReturnModal></ReturnModal>
              <Component {...pageProps} />
            </MenuProvider>
          </UserProvider>
        </SampleProvider>
      </>
    );
  }
}

export default ReactApp;
