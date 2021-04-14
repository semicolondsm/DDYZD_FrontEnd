import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
interface IProps {
  styleTags: Array<React.ReactElement<{}>>;
}
export default class MyDocument extends Document<IProps> {
  static getInitialProps({ renderPage } : { renderPage : any}) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App : any) => (props : any) =>
      sheet.collectStyles(<App {...props} />),
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }
  render(){
    return(
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          {this.props.styleTags}
        </Head>
        <body /* style={{overflow:"hidden"}} */>
            <Main />
            <NextScript />
        </body>
      </Html>
      
    )
  }
}
