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
          <style jsx>{`
            *{
              margin: 0;
              padding: 0;
              @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
              font-family: 'Noto Sans KR', sans-serif;
              list-style: none;
              box-sizing: border-box;
            },
            a{
              text-decoration: none;
            },
            body{
              margin: 0;
              background: #F5F5F5;
            }
          `}</style>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
      </Html>
      
    )
  }
}