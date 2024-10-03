import { keyframes } from '@emotion/react'

export const blurAnimation = keyframes`  
  from {
    filter: blur(10px);
    transform: scale(1.02) translateY(20px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    transform: scale(1) translateY(0);
    opacity: 1;
  }
`

export const blurAnimationHero = keyframes`
  from {
    filter: blur(10px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`
