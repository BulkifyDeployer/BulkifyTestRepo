import styled from "@emotion/styled";
import { COLORS } from "utils";

export const Wrapper = styled.footer`
  padding: 25px 16px;
  display: flex;
  justify-content: space-between;
`

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Link = styled.a`
  display: flex;
  margin: 0 16px;
  font-size: ${16 / 16}rem;
  line-height: ${20 / 16}rem;
  font-weight: 500;
  text-decoration: none;
  color: ${COLORS.text};
  
  :hover {
    color: ${COLORS.white};

    svg path {
      stroke: ${COLORS.white};
    }
  }

  @media (max-width: 428px) {
    font-size: ${14 / 16}rem;
    line-height: ${18 / 16}rem;
  }
`