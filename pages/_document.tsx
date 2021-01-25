import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { GlobalStyle } from '../style/GlobalStyled'
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(
          <>
            <GlobalStyle></GlobalStyle>
            <App {...props} />
          </>
        ),
      })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
           {initialProps.styles}
           {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render(){
    return(
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet"/>
          <link rel="stylesheet" type="text/css" href="https://semicolondsm.xyz/css/index.css"></link>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
      </Html>
      
    )
  }
}
