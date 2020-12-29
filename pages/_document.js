import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            {/* SEO Meta Tags */}
            <meta name="description" content="" />
            <meta name="author" content="Adão Oliveira" />

                {/* OG Meta Tags to improve the way the post looks when you share the page on LinkedIn, Facebook, Google+ */}
                <meta property="og:site_name" content="Grupo Maximiano" /> {/* website name */}
                <meta property="og:site" content="" /> {/* website link */}
                <meta property="og:title" content="Grupo Maximiano" /> {/* title shown in the actual shared post */}
                <meta property="og:description" content="A startup qe irá revolucionar seus negócios. Confira mais em nosso site." /> {/* description shown in the actual shared post */}
                <meta property="og:image" content="" /> {/* image link, make sure it's jpg */}
                <meta property="og:url" content="" /> {/* where do you want your post to link to */}
                <meta property="og:type" content="article" />

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
                <script src="/js/images-loded.min.js"></script>
                <script src="/js/custom.js"></script>
              </body>
      </Html>
    );
  }
}

export default MyDocument;
