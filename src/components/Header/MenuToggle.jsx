import styled from "@emotion/styled";
import { Bars3Icon as HamburgerIcon } from "@heroicons/react/24/outline"
import { COLORS } from "utils";

const MenuToggle = ({ toggle }) => {
  return (
    <Wrapper>
      <CloseButton onClick={() => toggle()}>
        <HamburgerIcon aria-hidden="true" />
      </CloseButton>
    </Wrapper>
  )
}

export default MenuToggle;

const CloseButton = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid ${COLORS["light-gray"]};
  border-radius: 20px;
  cursor: pointer;
  outline: none;
  color: white;
  stroke: ${COLORS.white};
    
  svg {
    width: 25px;
  }
  :hover {
    border: 1px solid ${COLORS.secondary};

    svg {
      stroke: ${COLORS.secondary};
    }
  }
`
const Wrapper = styled.div`
  display: flex;

  @media (min-width: 1024px) {
    display: none;
  }
`