import type { AppProps } from 'next/app'
import Image from 'next/image'
import Link from 'next/link'
import { Hand, Handbag } from 'phosphor-react'

import { Container, Header } from '../styles/pages/app'

import { globalStyles } from '../styles/global'
import '../styles/spinner.css'

import logoIgnite from '../assets/logo-ignite.svg'
import { BagMenu } from '../components/BagMenu'
import { useState } from 'react'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [isBagOpen, setIsBagOpen] = useState(false)

  function handleOpenBag() {
    setIsBagOpen(true)

    if(isBagOpen) {
      setIsBagOpen(false)
    }
  }


  return (
    <Container>
      <Header>
        <Link href={'/'}>
          <Image src={logoIgnite.src} width={129.74} height={52} alt="" />
        </Link>
        <button onClick={handleOpenBag}>
          <Handbag size={24} color='#fff' />
          <span>1</span>
        </button>
      </Header>

      {isBagOpen ? <BagMenu onBagOpen={handleOpenBag} /> : <></>}

      <Component {...pageProps} />
    </Container>
  )
}
