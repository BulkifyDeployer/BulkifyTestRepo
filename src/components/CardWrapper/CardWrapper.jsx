import styled from "@emotion/styled";
import { QUERIESV2 } from "utils";

export const CardWrapper = ({ children }) => {
  return (
    <CardBorder>
      <Card>{children}</Card>
    </CardBorder>
  )
}
const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: var(--color-black);
  padding: 24px;
  gap: 24px;
  flex-wrap: nowrap;

  @media ${QUERIESV2.sm.andDown} {
    padding: 12px 16px 16px;
    gap: 16px;
  }
`
const CardBorder = styled.div`
  width: 100%;
  padding: 1px;
  box-sizing: border-box;
  background: var(--gradient);
  border-radius: 10px;
`;