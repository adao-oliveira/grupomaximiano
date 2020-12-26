import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Grupo Maximiano</title>
          <meta name="keywords" content="" />
          <meta name="description" content="" />
          <meta name="author" content="Adão Oliveira" />
          <link
            rel="shortcut icon"
            href="images/favicon.png"
            type="image/x-icon"
          />
          <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" /> 
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/style.css" />
          <link rel="stylesheet" href="/css/responsive.css" /> 
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/js/jquery-3.2.1.min.js"></script>
          <script src="/js/popper.min.js"></script>
          <script src="/js/bootstrap.min.js"></script>
          <script src="/js/bootsnav.js."></script>
          <script src="/js/images-loded.min.js"></script>
          <script src="/js/custom.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
