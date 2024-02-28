import styled from "@emotion/styled";
import { PrimaryButton } from "components";

export const StyledHeader = styled.div`
  background: var(--gradient);
  padding: 1.5rem;
`


export const CloseButton = styled.div`
  text-align: right;
  color: var(--color-white);
  font-size: ${20 / 16}rem;
  font-weight: 700;
  cursor: pointer;
  margin-left: auto;
  margin-right: 16px;
`
export const HeaderText = styled.div`
  color: var(--color-white);
  font-size: ${16 / 16}rem;
`

export const ConnectButton = styled(PrimaryButton)``;

export const DisconnectButton = styled(PrimaryButton)`
  margin-top: 1.25rem;
`

export const ConnectText = styled.div`
  > div {
    display: inline-block;
    background-color: var(--color-white);
    height: 12px;
    width: 12px;
    margin-right: 4px;
    border-radius: 8px;
    content: " ";
  }
  color: var(--color-gray);
`;

export const TopHeaderRow = styled.div`
  display: flex;
`