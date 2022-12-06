import { styled } from "@stitches/react";

export const BagMenuContainer = styled('div', {
  position: "absolute",
  zIndex: 4,
  top: 0,
  right: 0,
  width: '100%',
  maxWidth: '30rem',
  height: '100vh',
  padding: '3rem',

  background: '$gray800',
  boxShadow: '0px 0px 15px 2px #000',

  'h3': {
    marginTop: 32,
  },

  'footer': {
    margin: 'auto 0px'
  }
})

export const CloseButton = styled('button', {
  position: "absolute",
  top: 24,
  right: 24,
  background: "transparent",
  border: 0,
  color: '$gray300',
  cursor: "pointer",
  
  '&:hover': {
    scale: 1.15,
    color: '$green500',
  }
})

export const ProductOnBag = styled('div', {
  marginTop: 32,
  display: "flex",
  alignItems: 'center',
  gap: '1.25rem',

  'div': {
    display: "flex",
    flexDirection: "column",
    gap: 8,

    fontSize: '$lg',

    'span': {
      color: '$gray300',
    },

    'button': {
      marginTop: 4,
      marginRight: 'auto',

      fontSize: '$sm',
      fontWeight: 'bold',

      background: 'transparent',
      color: '$green500',
      border: 0,
      cursor: 'pointer',

      '&:hover': {
        color: '$green300',
      },

    }
  }
})

export const ImageContainer = styled('div', {
  height: 95,
  width: 95,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

})