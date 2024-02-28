import styled from "@emotion/styled";
import { QUERIESV2, COLORS } from "utils";

const sizeMap = {
  "4xl": {
    fontSize: 48,
    lineHeight: 58,
    mobileSize: "3xl",
  },
  "3.5xl": {
    fontSize: 40,
    lineHeight: 48,
    mobileSize: "3xl",
  },
  "3xl": {
    fontSize: 32,
    lineHeight: 38,
    mobileSize: "2xl",
  },
  "2xl": {
    fontSize: 26,
    lineHeight: 31,
    mobileSize: "xl",
  },
  xl: {
    fontSize: 22,
    lineHeight: 26,
    mobileSize: "lg",
  },
  lg: {
    fontSize: 18,
    lineHeight: 26,
    mobileSize: "md",
  },
  md: {
    fontSize: 16,
    lineHeight: 20,
    mobileSize: "sm",
  },
  sm: {
    fontSize: 14,
    lineHeight: 18,
    mobileSize: "xs",
  },
  xs: {
    fontSize: 12,
    lineHeight: 14,
    mobileSize: "xs",
  },
}

export const Text = styled.div`
  font-style: normal;
  font-weight: ${({ weight = 400 }) => weight};
  color: ${({ color = "white" }) => COLORS[color]};

  font-size: ${({ size = "md" }) => `${sizeMap[size].fontSize / 16}rem`};
  line-height: ${({ size = "md" }) =>
    `${sizeMap[size || "md"].lineHeight / 16}rem`};

  text-transform: ${({ casing = "normal" }) =>
    casing === "normal" ? "none" : casing};

  @media ${QUERIESV2.sm.andDown} {
    font-size: ${({ size = "md" }) =>
    `${sizeMap[sizeMap[size].mobileSize].fontSize / 16}rem`};
    line-height: ${({ size = "md" }) =>
    `${sizeMap[sizeMap[size].mobileSize].lineHeight / 16}rem`};
  }
`;