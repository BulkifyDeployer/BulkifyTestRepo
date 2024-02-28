import { useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuItem,
  Sidebar as ReactProSidebar,
  sidebarClasses,
} from 'react-pro-sidebar';
import {
  StyledHeader,
  CloseButton,
  HeaderText,
  ConnectButton,
  DisconnectButton,
  ConnectText,
  TopHeaderRow,
  // ConnectedButtonsWrapper
} from './Sidebar.styled';

import { getChainInfo, isSupportedChainId } from "utils";
import { useSidebar } from "./useSidebar";
import closeIcon from "assets/icons/cross.svg";
import { useConnection } from "hooks";
import { ChainSelector, Text } from "components";

const sidebarWidth = "450px";

const sidebarRootStyles = {
  zIndex: "3000 !important",
  direction: "ltr !important",
  [`@media (max-width: ${sidebarWidth})`]: {
    width: "100%",
    minWidth: "100%",
  },
  borderLeftWidth: "0px !important",
  [`.${sidebarClasses.container}`]: {
    background: "var(--color-dark)",
  }
};

export const Sidebar = ({
  openSidebar, setOpenSidebar
}) => {
  const {
    sidebarNavigationLinks,
    account,
    ensName,
    isConnected,
    chainId,
  } = useSidebar(openSidebar);

  const { connect, disconnect, wallet } = useConnection();
  const addrOrEns = ensName ?? account;

  const onClickLink = useCallback(() => {
    setOpenSidebar(false);
  }, []);

  const onClickOverlay = useCallback(() => {
    setOpenSidebar(false);
  }, []);

  return (
    <ReactProSidebar
      onBackdropClick={onClickOverlay}
      toggled={openSidebar}
      breakPoint="all"
      width={sidebarWidth}
      rootStyles={sidebarRootStyles}
      rtl
    >
      <StyledHeader>
        <TopHeaderRow>
          {!isConnected && (
            <ConnectButton
              backgroundColor="dark-gray"
              textColor="white"
              onClick={() => {
                connect(wallet, { trackSection: "mobileNavSidebar" })
              }}
            >
              Connect Wallet
            </ConnectButton>
          )}
          {isConnected && (
            <ConnectText>
              <div /> Connected
            </ConnectText>
          )}
          <CloseButton
            onClick={() => setOpenSidebar(false)}
          >
            <img src={closeIcon} alt="close_button" />
          </CloseButton>
        </TopHeaderRow>
        {addrOrEns && <HeaderText>{addrOrEns}</HeaderText>}
        {isSupportedChainId(chainId) ? (
          <HeaderText>{getChainInfo(chainId).name}</HeaderText>
        ) : isConnected ? (
          <HeaderText>Unsupported Network</HeaderText>
        ) : null}
        {isConnected && wallet ? (
          <DisconnectButton
            backgroundColor="dark-gray"
            textColor="white"
            size="md"
            onClick={() => disconnect(wallet, { trackSection: "mobileNavSidebar" })}
          >
            Disconnect
          </DisconnectButton>
        ) : null}
      </StyledHeader>

      <Menu
        closeOnClick={true}
        menuItemStyles={{
          button: {
            ":hover": {
              backgroundColor: "#34353a",
            },
          },
        }}
      >
        {sidebarNavigationLinks.map((item) => (
          <MenuItem
            key={item.title}
            onClick={onClickLink}
            component={<Link to={item.pathName} />}
          >
            <Text>{item.title}</Text>
          </MenuItem>
        ))}
      </Menu>
    </ReactProSidebar>
  )
}