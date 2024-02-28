import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePrevious, useConnection } from "hooks";

const sidebarNavigationLinks = [
  {
    pathName: "/",
    title: "Home"
  },
  {
    pathName: "/transfer",
    title: "Transfer"
  },
  {
    pathName: "/discord",
    title: "Discord"
  },
  {
    pathName: "/Twitter",
    title: "Twitter"
  },
  {
    pathName: "/Docs",
    title: "Docs"
  },


];

export function useSidebar(openSidebar) {
  const { account, ensName, isConnected, chainId } = useConnection();
  const location = useLocation();

  const [className, setClassName] = useState("closed");
  const prevOpenSidebar = usePrevious(openSidebar);

  useEffect(() => {
    if (openSidebar && openSidebar !== prevOpenSidebar) {
      setClassName("transition");
      setTimeout(() => {
        setClassName("open");
      }, 100);
    }
    if (!openSidebar && openSidebar !== prevOpenSidebar) {
      setClassName("transition");
      setTimeout(() => {
        setClassName("closed");
      }, 250);
    }
  }, [openSidebar, prevOpenSidebar]);


  return {
    account,
    ensName,
    isConnected,
    chainId,
    location,
    className,
    setClassName,
    sidebarNavigationLinks,
  }
}