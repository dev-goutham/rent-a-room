import Document, { Html, Head, Main, NextScript } from "next/document"
import React from "react"

class MyDocument extends Document<any> {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link rel="apple-touch-icon" href="/logo.png" key="apple" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/logo.png"
            key="icon32"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/logo.png"
            key="icon16"
          />
          <title>Rent A Room</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
