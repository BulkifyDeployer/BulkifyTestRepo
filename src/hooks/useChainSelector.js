import { useState, useEffect, useRef } from "react";
import { useOnboard, useConnection } from "hooks";

export function useChainSelector() {
  const { setChain, chainId } = useOnboard();
  const { wallet } = useConnection();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleSelectChain = (newChainId) => {
    if (wallet) {
      setChain({
        chainId: newChainId,
        wallet: wallet,
      });
      setDropdownVisible(false);
    }

    setDropdownVisible(false);
  };

  return {
    chainId,
    dropdownVisible,
    setDropdownVisible,
    handleSelectChain,
    dropdownRef,
  };
}
