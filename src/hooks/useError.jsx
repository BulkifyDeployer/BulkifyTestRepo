import { useContext } from "react";
import { useState, useCallback, createContext } from "react";

function useErrorManager() {
  const [error, setError] = useState(undefined);
  const removeError = useCallback(() => setError(undefined), []);
  const addError = useCallback(
    (error) => setError(error),
    []
  );

  return {
    error,
    addError,
    removeError,
  };
}

const ErrorContext = createContext(undefined);
ErrorContext.displayName = "ErrorContext";
export const ErrorProvider = ({ children }) => {
  const value = useErrorManager();
  return (
    <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
  );
};

export function useError() {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("useError must be used within an <ErrorProvider>");
  }
  return context;
}
