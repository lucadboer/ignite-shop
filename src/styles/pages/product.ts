import { styled } from "@stitches/react";

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4.5rem',

  maxWidth: 1180,
  margin: '0 auto'
})

export const ImageContainer = styled('section', {
  display: "flex",
  justifyContent:"center",
  alignItems: "center",

  height: 600,

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  boxShadow: '2px 2px 30px #000',
  borderRadius: 8,

  img: {
    objectFit: "cover"
  }
})

export const ProductDetails = styled('section', {
  display: "flex",
  flexDirection: "column",

  h1: {
    fontSize: '2xl',
    color: '$gray300',
  },

  span: {
    display: "block",
    fontSize: '$2xl',
    color: '$green300',
    marginTop: '1rem',
  },

  p: {
    fontSize: '$md',
    color: '$gray300',
    marginTop: '2.5rem'
  },

  button: {
    marginTop: 'auto',
    background: '$green500',
    color: '$gray100',
    padding: '1.25rem',
    fontSize: '$md',

    border: 0,
    borderRadius: 8,
    cursor: "pointer",
    transition: 'all 0.25s',

    '&:hover': {
      background: '$green300',
    }

  }
})