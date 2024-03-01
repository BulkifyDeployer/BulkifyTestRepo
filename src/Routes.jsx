import React, { useState, Suspense } from 'react';
import { Route, Routes as Routers } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Header, SuperHeader, Sidebar, BouncingDotsLoader } from 'components';
import { useError, useConnection } from 'hooks';
import styled from "@emotion/styled";
import { WrongNetworkError, generalMaintanceMessage, stringValueInArray, getConfig } from 'utils';
import lazyWithRetry from 'utils/lazy-with-retry';
import NotFound from './views/NotFound';

const Lending = lazyWithRetry(
  () => import("./views/Lending")
);
const Transfer = lazyWithRetry(
  () => import("./views/Transfer")
)

const warningMessage = `
  We noticed that you have connected from a contract address.
  We recommend that you change the destination of the transfer (by clicking the "Change account" text below the To dropdown)
  to a non-contract wallet you control on the destination chain to avoid having your funds lost or stolen.
`;

function useRoutes() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { provider, isContractAddress } = useConnection();
  const location = useLocation();
  const { error, removeError } = useError();
  const config = getConfig();

  return {
    openSidebar,
    setOpenSidebar,
    provider,
    error,
    removeError,
    location,
    isHomepage: location.pathname === "/",
    isTransfer: location.pathname === "/transfer",
    isContractAddress,
    config
  }
}

const Routes = () => {
  const {
    openSidebar,
    setOpenSidebar,
    error,
    removeError,
    location,
    config,
    isContractAddress,
    isHomepage,
    isTransfer,
  } = useRoutes();

  return (
    <>
      {error && !(error instanceof WrongNetworkError) && (
        <SuperHeader>
          <div>{error.message}</div>
          <RemoveErrorSpan onClick={() => removeError()}>X</RemoveErrorSpan>
        </SuperHeader>
      )}
      {isContractAddress && (
        <SuperHeader>{warningMessage}</SuperHeader>
      )}
      <Header
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
        transparentHeader={isTransfer || isHomepage}
      />
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <Suspense fallback={<BouncingDotsLoader />}>
        <Routers>
          <Route exact path='/' Component={Lending} />
          <Route exact path='/transfer' Component={Transfer} />
          <Route exact path='*' Component={NotFound} />
        </Routers>
      </Suspense>
    </>
  )
}

export default Routes;

const RemoveErrorSpan = styled.span`
  cursor: pointer;
  font-size: ${16 / 16}rem;
  font-weight: 500;
`