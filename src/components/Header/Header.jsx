import { useLocation } from "react-router-dom";
import { Link as UnstyledLink } from "react-router-dom";
import { Wallet, ChainSelector } from "components";
import { Text } from "components/Text";
import {
  Wrapper,
  Navigation,
  List,
  Item,
  WalletWrapper,
  Spacing,
  LogoText,
  NavigationInnerWrapper,
  MobileNavigation
} from "./Header.styled"
import MenuToggle from "./MenuToggle";
import { isChildPath } from "./utils";
import { useScrollPosition } from "hooks/useScrollPosition";
import { ReactComponent as Logo } from "assets/icons/111.svg";

const LINKS = [
  {
    name: (
      <Text color="secondary" size="md">
        Transfer
      </Text>
    ), href: '/transfer'
  },
  { name: 'Docs', href: '/docs' },
  { name: 'Discord', href: '/discord' },
  { name: 'Twitter', href: '/twitter' },
]

export const Header = ({
  openSidebar,
  setOpenSidebar,
  transparentHeader,
}) => {
  const location = useLocation();
  const scrollPosition = useScrollPosition();

  const toggleMenu = () => {
    setOpenSidebar((prevValue) => !prevValue);
  }

  return (
    <Wrapper
      data-cy="primary-header"
      transparentHeader={transparentHeader}
      scrollPosition={scrollPosition}
    >
      <Navigation>
        <NavigationInnerWrapper>
          <UnstyledLink
            to={{ pathname: "/", search: location.search }}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <Logo className="h-8 w-auto" />
            <LogoText>Bulkify</LogoText>
          </UnstyledLink>

          <List>
            {LINKS.map(({ href, name }) => (
              <Item
                key={href}
                aria-selected={isChildPath(location.pathname, href)}
                to={{
                  pathname: href,
                  search: location.search
                }}
              >
                {name}
              </Item>
            ))}
          </List>
        </NavigationInnerWrapper>
        <Spacing />
        <WalletWrapper>
          <ChainSelector />
          <Wallet />
          <MobileNavigation animate={openSidebar ? "open" : "closed"}>
            <MenuToggle toggle={toggleMenu} setOpenSidebar={setOpenSidebar} />
          </MobileNavigation>
        </WalletWrapper>
      </Navigation>
    </Wrapper>
  )
}