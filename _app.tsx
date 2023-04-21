import '@/styles/globals.css'
import '@/node_modules/react-modal-video/scss/modal-video.scss';
import type { AppProps } from 'next/app'
import Layout from "../components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
