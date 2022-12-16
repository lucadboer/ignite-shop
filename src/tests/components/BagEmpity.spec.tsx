import { render, screen } from '@testing-library/react'
import { BagEmpity } from '../../components/BagEmpity'

describe('BagEmpity Component', () => {
  it('render correctly', () => {
    render(
      <>
        <BagEmpity />
      </>
    )

    expect(
      screen.getByText('Parece que seu carrinho está vazio'),
    ).toBeInTheDocument()
  })
})