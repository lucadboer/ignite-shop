import { render } from '@testing-library/react'
import { BagEmpity } from './BagEmpity'

describe('BagEmpity Component', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <>
        <BagEmpity />
      </>
    )

    expect(getByText('Parece que seu carrinho está vazio')).toBeInTheDocument()
  })
})