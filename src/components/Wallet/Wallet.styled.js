import styled from "@emotion/styled";
import { COLORS } from "utils";

export const ConnectButton = styled.button`
  font-size: ${16 / 16}rem;
  line-height: ${20 / 16}rem;
  color: ${COLORS.white}
  cursor: pointer;
  padding: 9px 20px;
  border: 1px solid ${COLORS.gradient};
  border-radius: 12px;
  background: ${COLORS.gradient};
  transition: opacity 0.1s;

  :hover {
    opacity: 0.8;
  }

  @media (max-width: 428px) {
    font-size: ${14 / 16}rem;
    line-height: ${18 / 16}rem;
    padding: 10px 16px;
  }
`

export const UnsupportedNetwork = styled.div`
  background-color: rgba(45, 46, 51, 0.25);
  padding: 1rem 0.5rem;
`