import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { GlobalStyle } from '../style/GlobalStyled'
import Helmet from "react-helmet";
type Props = {
  helmet : any,
  styleTags : any,
}
export default class MyDocument extends Document<Props> {
  static async getInitialProps(context : DocumentContext) {
    const sheet = new ServerStyleSheet(); 
    const page = context.renderPage(App => props =>
      sheet.collectStyles(
        <>
          <GlobalStyle />
          <App {...props} />
        </>
      )
    ); 
    const styleTags = sheet.getStyleElement();
    return { ...page, helmet: Helmet.renderStatic(), styleTags };
  }
  render(){
    const { htmlAttributes, bodyAttributes, ...helmet } = this.props.helmet as { htmlAttributes : any, bodyAttributes: any}; 
    const htmlAttrs = htmlAttributes.toComponent();
    const bodyAttrs = bodyAttributes.toComponent();
    return(
      <Html {...htmlAttrs}>
        <Head>
          {this.props.styleTags}
          {Object.values(helmet).map(el => el.toComponent())} 
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet"/>
        </Head>
        <body {...bodyAttrs}>
            <Main />
            <NextScript />
        </body>
      </Html>
      
    )
  }
}