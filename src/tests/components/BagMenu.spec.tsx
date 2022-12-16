import { render, screen } from '@testing-library/react'
import { mocked } from 'jest-mock'
import { BagMenu } from '../../components/BagMenu'

describe('BagMenu Component', () => {
  it('shuold render correctly', () => {
    render(
      <>
        <BagMenu onBagOpen={() => {}} />
      </>
    )

    expect(screen.getByText('Sacola de compras')).toBeInTheDocument()
  })
})