import type { RefObject, ReactNode } from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { useIntersection } from '@/hooks/useIntersection'

import { blurAnimation } from './blurAnimation'

type Props = {
  target: RefObject<HTMLElement>
  children: ReactNode
  className?: string
}

export const AnimationContainer = ({ target, children, className }: Props) => {
  const { isIntersecting } = useIntersection(target, {
    threshold: 0.2,
    isOnce: true,
  })

  return (
    <Container
      isIntersecting={!!isIntersecting}
      {...(className && { className })}
    >
      {children}
    </Container>
  )
}

const Container = styled.div<{ isIntersecting: boolean }>`
  isolation: isolate;
  opacity: 0;

  ${({ isIntersecting }) =>
    isIntersecting &&
    css`
      opacity: 1;
      animation: ${blurAnimation} 1s ease-out;
    `}
`
