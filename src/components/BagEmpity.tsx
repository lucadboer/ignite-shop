import { SmileySad } from "phosphor-react";
import { BagEmpityContainer } from "../styles/BagEmpity";

export function BagEmpity() {
  return (
    <BagEmpityContainer>
      <p>Parece que seu carrinho está vazio</p>
      <SmileySad size={110}  />
    </BagEmpityContainer>
  )
}