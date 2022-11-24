
import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: "$green500",
  color: "$gray100",
  padding: '4px 8px',
  borderRadius: '4px',
  width: '20rem',

  '&:hover': {
    filter: 'brightness(0.8)'
  }
})

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button>Teste</Button>
    </div>
  )
}
