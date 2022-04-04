import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next';
import { Canvas } from '@react-three/fiber';

function MyApp({ Component, pageProps }: AppProps) {
  return <Canvas>
    <Component {...pageProps} />
  </Canvas>
}

export default appWithTranslation(MyApp)