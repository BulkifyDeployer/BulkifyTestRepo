import styled from "@emotion/styled";
import React from "react";

const LoaderColorMapping = {
  white: "#fff",
  "dark-gray": "hsl(230deg 6% 19%);",
  warning: "#f9d26c"
}

export const BouncingDotsLoader = ({
  type = "default",
  dataCy,
  dotColor,
}) => {
  if (type === "big")
    return (
      <BigBouncingWrapper dotColor={dotColor ?? "dark-gray"} data-cy={dataCy}>
        <div />
        <div />
        <div />
      </BigBouncingWrapper>
    );
  return (
    <BouncingWrapper dotColor={dotColor ?? "dark-gray"} data-cy={dataCy}>
      <div />
      <div />
      <div />
    </BouncingWrapper>
  );
}

const BouncingWrapper = styled.div`
display: inline-flex;
  margin-left: 4px;

  > div {
    width: 6px;
    height: 6px;
    margin: 2px 4px;
    border-radius: 50%;
    background-color: ${({ dotColor }) => LoaderColorMapping[dotColor]};
    opacity: 1;
    animation: bouncing-loader 0.6s infinite alternate;
  }

  @keyframes bouncing-loader {
    to {
      transform: translateY(-8px);
    }
  }

  > div:nth-of-type(2) {
    animation-delay: 0.2s;
  }

  > div:nth-of-type(3) {
    animation-delay: 0.4s;
  }
`;

const BigBouncingWrapper = styled(BouncingWrapper)`
margin-left: 0;
display: inline-flex;
> div {
  height: 12px;
  width: 12px;
}
`;
