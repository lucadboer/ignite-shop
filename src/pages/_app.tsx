import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'

import logoIgnite from '../assets/logo-ignite.svg'
import Image from 'next/image'
import Home from '.'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoIgnite.src} width={129.74} height={52} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
