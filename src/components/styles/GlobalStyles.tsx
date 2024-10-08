import { Global, css } from '@emotion/react'
import { useTheme } from '@emotion/react'

import { resetCss } from './resetCss'

export const GlobalStyles = () => {
  const theme = useTheme()
  return (
    <Global
      styles={css`
        ${resetCss}
      `}
    />
  )
}
