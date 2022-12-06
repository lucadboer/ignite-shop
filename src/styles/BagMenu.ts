import { styled } from "@stitches/react";

export const BagMenuContainer = styled('div', {
  position: "fixed",
  zIndex: 1,
  top: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  maxWidth: '30rem',
  padding: '3rem',

  display: "flex",
  flexDirection: "column",

  background: '$gray800',
  boxShadow: '0px 0px 15px 2px #000',

  'h3': {
    marginTop: 32,
  },

  'footer': {
    display: "flex",
    flexDirection: 'column',
    marginTop: 'auto',

    'header': {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 7,
      fontSize: '$md',
      color: '$gray300'
    },

    'main': {
      display: 'flex',
      justifyContent: 'space-between',

      'span': {
        fontSize: '$md',
        fontWeight: 'bold'
      },

      'strong': {
        fontSize: '$xl',
      }
    },

    'button': {
      height: 60,
      marginTop: 50,
      background: '$green500',
      border: 0,
      borderRadius: 8,

      fontSize: '$sm',
      fontWeight: 'bold',
      color: '$gray100',
      letterSpacing: 1.25,
      cursor: 'pointer',
      transition: 'background 0.2s',

      '&:hover': {
        background: '$green300',
      }
    }
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

export const ProductContainer = styled('div', {
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  maxHeight: 350,
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