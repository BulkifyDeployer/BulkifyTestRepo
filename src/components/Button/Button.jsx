import styled from "@emotion/styled";
import { QUERIESV2, COLORS } from "utils";

const sizeMap = {
  lg: {
    fontSize: "18px",
    lineHeight: "26px",
    height: "64px",
    padding: "0px 40px",
    gap: "4px",
    borderRadius: "10px",
    mobileSize: "md",
  },
  md: {
    fontSize: "16px",
    lineHeight: "20px",
    height: "40px",
    padding: "0px 20px",
    gap: "6px",
    borderRadius: "8px",
    mobileSize: "sm",
  },
  sm: {
    fontSize: "14px",
    lineHeight: "18px",
    height: "40px",
    padding: "0px 16px 1px 16px",
    gap: "4px",
    borderRadius: "8px",
    mobileSize: "sm",
  },
}


const BaseButton = styled.button`
  // Text styles
  font-style: normal;
  font-weight: 500;
  font-size: ${({ size = "lg" }) => sizeMap[size].fontSize};
  line-height: ${({ size = "lg" }) => sizeMap[size].lineHeight};

  // Box styles
  height: ${({ size = "lg" }) => sizeMap[size].height};
  padding: ${({ size = "lg" }) => sizeMap[size].padding};
  gap: ${({ size = "lg" }) => sizeMap[size].gap};
  border-radius: ${({ size = "lg" }) => sizeMap[size].borderRadius};

  background-color: transparent;

  &:hover:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media ${QUERIESV2.sm.andDown} {
    // Text styles
    font-size: ${({ size = "lg" }) =>
    sizeMap[sizeMap[size].mobileSize].fontSize};
    line-height: ${({ size = "lg" }) =>
    sizeMap[sizeMap[size].mobileSize].lineHeight};

    // Box styles
    height: ${({ size = "lg" }) => sizeMap[sizeMap[size].mobileSize].height};
    padding: ${({ size = "lg" }) => sizeMap[sizeMap[size].mobileSize].padding};
    gap: ${({ size = "lg" }) => sizeMap[sizeMap[size].mobileSize].gap};
    border-radius: ${({ size = "lg" }) =>
    sizeMap[sizeMap[size].mobileSize].borderRadius};
  }
`;

export const UnstyledButton = styled(BaseButton)`
  border: none;
  padding: 0;
  height: auto;
  color: ${({ textColor = "text" }) => COLORS[textColor]};

  @media ${QUERIESV2.sm.andDown} {
    padding: 0;
  }
`;

export const PrimaryButton = styled(BaseButton)`
  color: ${({ textColor = "text" }) => COLORS[textColor]};
  border: none;
  background: ${({ backgroundColor = "gradient" }) =>
    COLORS[backgroundColor]};

  &:hover:not(:disabled) {
    opacity: 0.75;
    transition: opacity 100ms ease-out;
  }

  &:disabled {
    opacity: 0.25;
  }
`;

export const SecondaryButton = styled(BaseButton)`
  color: ${({ borderColor = "gradient", textColor }) =>
    COLORS[textColor || borderColor]};
  border: 1px solid;
  border-color: ${({ borderColor = "gradient" }) => COLORS[borderColor]};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? COLORS[backgroundColor] : "transparent"};

  &:hover:not(:disabled) {
  border-color: ${({ hoveredBorderColor, borderColor = "gradient" }) =>
    COLORS[hoveredBorderColor || borderColor]};
  transition: border-color 100ms ease-out;
  }

  &:disabled {
  opacity: 0.25;
}
`;
