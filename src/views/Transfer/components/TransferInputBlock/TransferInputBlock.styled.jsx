import styled from "@emotion/styled";
import { Text } from "components";
import { QUERIESV2 } from "utils";
import { UnstyledButton } from "components";



export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 0%;
  justify-content: center;
`;

export const SelecotrBlockWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: -webkit-fill-available;
`;

export const SelectorButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  border-radius: 9999px;
  padding: 1px;
  font-size: ${14 / 16}rem;

  color: var(--color-white);
  background: var(--color-dark-gray);

  &:hover {
    background: var(--color-dark-gray-50);
  }
`;

export const TokenIcon = styled.img`
  height: 18px;
  width: 18px;
  border-radius: 9999px;
`;

export const StyledText = styled(Text)`
  white-space: nowrap;
`;

export const BalanceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Button = styled(UnstyledButton)`
  height: auto;
  @media ${QUERIESV2.tb.andDown} {
    height: auto;
  }
`;

export const SummaryText = styled(StyledText)`
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: right;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  border-radius: 9999px;
  border: none;
  padding-bottom: 28px;
  text-align: right;
`;

export const InnerInputWrapper = styled.div`
  width: 50%;
  float: right;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  text-align: right;
  color: var(--color-text);
  font-size: ${16 / 16}rem;
  font-weight: 500;

  border-none;
  outline: none;
  -moz-appearance: textfield;

  &::-webkit-inner-spin-button,&::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media ${QUERIESV2.tb.andDown} {
    font-size: ${14 / 16}rem;
  }

`;

export const DeleteButton = styled(Button)`
  padding: 5px;

  @media ${QUERIESV2.tb.andDown} {
    padding: 5px;
  }
`

