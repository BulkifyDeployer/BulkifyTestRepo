import { useChainSelector } from "hooks";
import { chainInfoList } from "utils";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  DropDownButton,
  DropDownInnerWrapper,
  DropDownWrapper,
  ChainImage,
  SelectorButton,
  SelectorWrapper
} from "./ChainSelector.styled";

const ChainItem = ({ chain, onClick }) => (
  <DropDownButton
    onClick={onClick}
    role="menuitem"
  >
    <img src={chain.logoURI} alt={`Chain Logo ${chain.name}`} />
    {chain.name}
  </DropDownButton>
);

export const ChainSelector = ({ className }) => {
  const { chainId, dropdownVisible, setDropdownVisible, handleSelectChain, dropdownRef } = useChainSelector();

  return (
    <SelectorWrapper ref={dropdownRef}>
      <SelectorButton
        onClick={() => setDropdownVisible(!dropdownVisible)}
        size="md"
        backgroundColor="dark-gray"
      >

        <ChainImage
          src={
            chainInfoList.find((chain) => chain.chainId === chainId)?.logoURI ||
            chainInfoList.find((chain) => chain.chainId === 1)?.logoURI
          }
          alt={`Chain Logo`}
        />

        <ChevronDownIcon width={'16px'} />
      </SelectorButton>

      {dropdownVisible && (
        <DropDownWrapper>
          <DropDownInnerWrapper >
            {chainInfoList.map((chain) => (
              <ChainItem key={chain.chainId} chain={chain} onClick={() => handleSelectChain(chain.chainId)} />
            ))}
          </DropDownInnerWrapper>
        </DropDownWrapper>
      )}
    </SelectorWrapper>
  );
};