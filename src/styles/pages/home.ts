import { styled } from "..";

export const HomeContainer = styled('main', {
  display: "flex",
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 580,
})

export const Product = styled('a', {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: '0.25rem',
  position: "relative",

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: "pointer",
  overflow: "hidden",

  'img': {
    objectFit: "cover",
  },

  'footer': {
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-between',
    padding: '0 2rem',
    position: "absolute",
    bottom: 0,
    width: '100%',
    height: 98,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    background: '$gray800',

    'span': {
      color: '$gray100',
      fontSize: '$md'
    },

    'strong': {
      color: '$green300',
      fontSize: '$xl'
    }
  },

  '&:hover': {
    'footer': {
      transform: 'translateY(0)',
      opacity: 1
    },
  }
})