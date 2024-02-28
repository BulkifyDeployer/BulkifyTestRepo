import styled from "@emotion/styled";
import { useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { QUERIESV2 } from "utils";

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: ${({ size }) => (size === "lg" ? "20px 30px" : "0 30px")};
height: 60px;
color: var(--color-gray);
background-color: var(--color-error);
border-bottom: 1px solid var(--color-gray);
position: unset;
width: 100%;
top: 0;
left: 0;
z-index: 1100;
& button {
  background-color: inherit;
  font-size: inherit;
  color: var(--color-gray);
  text-decoration: underline;
  cursor: pointer;
  border: none;
  padding: 0;
  margin: 0;
  display: inline-flex;
  &:hover {
    color: var(--color-black);
  }
}

@media ${QUERIESV2.tabletAndDown} {
  height: inherit;
  padding-top: 10px;
  padding-bottom: 10px;
}
`;

export const SuperHeader = ({ children, size }) => {
  const container = useRef(document.getElementById("super-header"));

  useLayoutEffect(() => {
    if (!container.current) {
      const root = document.getElementById("root");
      const div = document.createElement("div");

      div.id = "super-header";
      root.insertBefore(div, root.firstChild);
      container.current = div;
    }
  }, []);

  if (!container.current) {
    return null
  }

  return createPortal(
    <Wrapper size={size}>
      {children}
    </Wrapper>,
    container.current
  )
}