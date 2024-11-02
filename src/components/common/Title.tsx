import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const titleCss = css`
  font-size: 30px;
  font-family: 'Cormorant', serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--accent-light-pink);
`

export const Title = styled.span`
  ${titleCss}
`
