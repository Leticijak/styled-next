import styled from "styled-components"
import Layout from "../components/Layout"

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.xxl};
  color: ${({ theme }) => theme.colors.sec};
`

export default function Home() {
  return <Layout>My page</Layout>
}
