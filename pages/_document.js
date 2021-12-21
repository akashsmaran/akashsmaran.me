import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            {/* <link href="https://db.onlinewebfonts.com/c/23c0fcab84d99da0de762de7e220a6e1?family=Europa" rel="stylesheet"></link> */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://unpkg.com/social-likes-next/dist/social-likes.min.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument