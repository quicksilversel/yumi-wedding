'use client'

import styled from '@emotion/styled'

import { Hero } from '@/components/Hero'

const HomePage = () => {
  return <Hero />
}

const DefaultLayout = styled.main`
  width: 1000px;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-block: 50px;
`

export default HomePage
