import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'

import logoIgnite from '../assets/logo-ignite.svg'
import Image from 'next/image'
import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href={'/'}>
          <Image src={logoIgnite.src} width={129.74} height={52} alt="" />
        </Link>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
