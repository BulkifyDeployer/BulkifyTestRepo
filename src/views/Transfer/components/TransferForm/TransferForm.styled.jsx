import styled from "@emotion/styled";
import { QUERIESV2 } from "utils";
import { Text, UnstyledButton } from "components";

export const InputBlockWrapper = styled.div`
  display: flex;
  height: max-content;
  min-height: 80px;
  width: 100%;
  padding: 8px 12px;
  background: var(--color-dark);
  border-radius: 8px;
`;

export const AddTokenButton = styled(UnstyledButton)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1px;
  gap: 8px;
`;

export const ReceiverWrapper = styled(InputBlockWrapper)`
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  min-height: auto;
`

export const CustomLabel = styled(Text)``

export const ReceiverInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
  background: var(--color-dark);
  padding: 0px 4px;
  width: 100%;
`;

export const ReceiverInput = styled.input`
  background: transparent;
  color: var(--color-text);
  outline: none;
  flex-grow: 1;
  width: 100%;
`;

export const FeesBlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  background: var(--color-dark);
  border-radius: 8px;
`;

export const FeesCalcWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: end;
`;

export const FeesItem = styled(Text)`
  display: flex;
  gap: 8px;
`