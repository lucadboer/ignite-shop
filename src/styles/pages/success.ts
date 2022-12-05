import { styled } from "@stitches/react";
import { NodeNextRequest } from "next/dist/server/base-http/node";

export const SucessContainer = styled('main', {
  height: 550,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: '0 auto',

  p: {
    maxWidth: 550,
    marginTop: 32,

    fontSize: 18,
    textAlign: "center",
    lineHeight: '1.6',

    color: '$gray300'
  },

  a: {
    marginTop: 75,

    fontSize: '$xl',
    color: '$green300',
    textDecoration: "none",
    fontWeight: "bold",
    transition: 'color 0.15s',

    '&:hover': {
      color: '$green500',
    }
  },
})

export const ImageContainer = styled('div', {
  marginTop: 64,
  width: '100%',
  maxWidth: 130,
  height: 145,
  display: "flex",
  alignItems: "center",
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  img: {
    objectFit: "cover",
  }
})