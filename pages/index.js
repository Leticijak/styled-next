import styled from "styled-components"

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.xxl};
  color: ${({ theme }) => theme.colors.sec};
`

export default function Home() {
  return <Title>My page</Title>
}
