import { useRef } from 'react'

import styled from '@emotion/styled'

import { useIntersection } from '@/hooks/useIntersection'

import { Sp } from './Sp'

export const Pc = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { boundingClientRect } = useIntersection(ref, {
    threshold: 0,
  })

  const hasBorder = boundingClientRect && boundingClientRect.top < 0

  return (
    <>
      <Wrapper>
        <Container ref={ref} hasBorder={!!hasBorder}>
          <Sp />
        </Container>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

const Container = styled.div<{ hasBorder: boolean }>`
  width: 400px;
  margin: 0 auto;
  overflow-x: hidden;
  box-sizing: content-box;
  border-inline: ${({ hasBorder }) =>
    hasBorder ? '1px solid var(--accent-light-pink)' : '1px solid transparent'};
  transition: border-color 0.3s ease-out;
`
