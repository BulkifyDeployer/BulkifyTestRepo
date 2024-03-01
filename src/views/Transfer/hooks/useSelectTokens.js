import { useCallback, useState, useEffect } from "react";

import { getInitialToken } from "../utils";
import { useConnection } from "hooks";



export function useSelectTokens() {
  const { chainId } = useConnection();
  const [selectedToken, setSelectedToken] = useState();

  return {
    selectedToken
  };
}