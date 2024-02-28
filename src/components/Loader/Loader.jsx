import styled from "@emotion/styled";
import { Loader as LoaderIcon } from 'react-feather';

export const Loader = styled(LoaderIcon)`
  width: ${({ size = 24 }) => size}px;
  height: ${({ size = 24 }) => size}px;
  animation: rotation 2s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`