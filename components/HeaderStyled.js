import styled from "styled-components"

export const HeaderWrap = styled.div`
  font-size: ${({ theme }) => theme.fonts.xxl};
`
export const HeaderCont = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    color: ${({ theme }) => theme.colors.meat};
    text-decoration: none;
  }
`
