import styled from "@emotion/styled";
import { SecondaryButton, PrimaryButton } from "components/Button";

export const SelectorWrapper = styled.div`
  position: relative;
  text-align: left;
`

export const SelectorButton = styled(SecondaryButton)`
  display: flex;
  align-items: center;
  row-gap: 10px;
  border-radius: 5px;
  border-color: coral;
`

export const ChainImage = styled.img`
  width: 25px;
  height: 25px;
`

export const DropDownWrapper = styled.div`
  transform-origin: top right;
  position: absolute;
  background: rgba(0, 0, 0, 0.75);
  z-index: 20;
  right: 0;
  margin-top: 5px;
  width: 175px;
  border-radius: 16px;
`

export const DropDownInnerWrapper = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`

export const DropDownButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  width: 100%;
  transition-property: color;
  transition-duration: 75ms;

  &:hover{
    background-color: var(--color-dark-gray-50); 
    color: var(--color-secondary);
  }

  > img {
    width: 25px;
    height: 25px;
    margin-right: 8px;
  }
`