import Image from "next/image";
import Link from "next/link";
import { Handbag } from "phosphor-react";
import { useState } from "react";

import logoIgnite from '../assets/logo-ignite.svg'
import { useCart } from "../hooks/useCart";
import { HeaderContainer } from "../styles/Header";

import { BagMenu } from "./BagMenu";

export function Header() {

  const [isBagOpen, setIsBagOpen] = useState(false)

  const { cartItems } = useCart()
  const quantity = cartItems.length
  
  function handleOpenBag() {
    setIsBagOpen(true)

    if(isBagOpen) {
      setIsBagOpen(false)
    }
  }

  return (
  <HeaderContainer>
    <Link href={'/'}>
      <Image src={logoIgnite.src} width={129.74} height={52} alt="" />
    </Link>
    <button onClick={handleOpenBag}>
      <Handbag size={24} color='#fff' />
      {quantity ? (
      <span>
        {quantity}
      </span>
      ) : ''}
    </button>

    {isBagOpen ? <BagMenu onBagOpen={handleOpenBag} /> : <></>}

  </HeaderContainer>
  )
}