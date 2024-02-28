import styled from "@emotion/styled";
import { Link as UnstyledLink } from "react-router-dom";
import { motion } from "framer-motion";
import { COLORS } from "utils";


export const Wrapper = styled.header`
  
  background-color: ${({ transparentHeader, scrollPosition }) =>
    transparentHeader
      ? `#121214${Math.min(240, Math.floor(2.5 * scrollPosition))
        .toString(16)
        .padStart(2, "0")}`
      : `${COLORS["dark-gray"]}`};

  border-bottom: ${({ scrollPosition }) => {
    return scrollPosition > 0 ? `1px solid ${COLORS["light-gray"]}` : "1px solid transparent";
  }};
  height: 72px;
  padding: 0 24px; 
  display: flex; 
  position: sticky;
  top: 0;
  width: 100%; 
  z-index: 1000;
  align-items: center;

  @media (max-width: 428px) {
    height: 64px;
    padding: 0 12px;
  }
`

export const Navigation = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

export const NavigationInnerWrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`

export const LogoText = styled.span`
  text-transform: uppercase;
  font-weight: bold;
`

export const Spacing = styled.div`
  flex-grow: 1;
`

export const List = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    display: none;
  }
`

export const Item = styled(UnstyledLink)`
  font-size: ${16 / 16}rem;
  line-height: ${20 / 16}rem;
  position: relative;
  color: ${COLORS.white};
  font-weight: 400;
  margin: 0 24px 0 0;

  &[aria-selected="true"] {
    font-weight: 500;
    color: ${COLORS.secondary};

    ::after {
      content: "";
      position: absolute;
      top: 27px;
      left: 50%;
      width: 18px;
      height: 4px;
      border-radius: 2px;
      background-color: ${COLORS.secondary};
      transform: translateX(-50%);
    }

    svg {
      stroke-width: 2px;
    }
  }

  :hover {
    color: ${COLORS.secondary};
  }
`

export const WalletWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-end;
  gap: 12px;
`

export const MobileNavigation = styled(motion.nav)`
  margin-left: 8px;
`
