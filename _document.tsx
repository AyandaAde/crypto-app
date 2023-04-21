import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{
         backgroundColor: "#252525",
         backgroundImage: "linear-gradient(90deg, #1ee8b6 0%, #050A0A  97.15%)",
        backgroundBlendMode: "overlay",
      }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
