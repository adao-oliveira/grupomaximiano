import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            {/* SEO Meta Tags */}
            <meta name="description" content="" />
            <meta name="author" content="Adão Oliveira" />

                {/* OG Meta Tags to improve the way the post looks when you share the page on LinkedIn, Facebook, Google+ */}
                <meta property="og:site_name" content="Grupo Maximiano" /> {/* website name */}
                <meta property="og:site" content="https://grupomaximiano.com.br" /> {/* website link */}
                <meta property="og:title" content="Grupo Maximiano" /> {/* title shown in the actual shared post */}
                <meta property="og:description" content="Ajudamos você a colocar sua empresa no topo com estratégia !" /> {/* description shown in the actual shared post */}
                <meta property="og:image" content="../public/images/bgHome.webp" /> {/* image link, make sure it's jpg */}
                <meta property="og:url" content="" /> {/* where do you want your post to link to */}
                <meta property="og:type" content="article" />
                <meta name="twitter:image" content="../public/images/bgHome.webp" />

                <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
                <link rel="stylesheet" href="/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/style.css" />
                <link rel="stylesheet" href="/css/responsive.css" />
                <link href="https://unpkg.com/tailwindcss/dist/tailwind.min.css" rel="stylesheet"></link> 
        </Head>
              <body>
                <Main />
                <NextScript />
                <script src="/js/jquery-3.2.1.min.js"></script>
                <script src="/js/popper.min.js"></script>
                <script src="/js/bootstrap.min.js"></script>
                <script src="/js/custom.js"></script>
                <script src='https://llwhatsapp.blob.core.windows.net/whatschat-scripts/whatschat-8f5467fae9a84f80a19eb534d46d428a.js'></script>
                <script type="text/javascript" src=" https://cdn.rawgit.com/igorescobar/jQuery-Mask-Plugin/master/src/jquery.mask.js"></script>
              </body>
      </Html>
    );
  }
}

export default MyDocument;
