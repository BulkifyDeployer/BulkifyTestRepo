import styled from "@emotion/styled";
import { Text } from "components";
import { Link } from "react-router-dom";
import { QUERIESV2 } from "utils";

export const ExternalWrapper = styled.main`
  margin-top: -72px;
  padding-top: 72px;

  @media ${QUERIESV2.sm.andDown} {
    margin-top: -64px;
    padding-top: 64px;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  gap: 26px;
  padding: 36px 0;
  justify-content: space-between;

  @media ${QUERIESV2.tb.andDown} {
    flex-direction: column
  }
`

export const StatsSegment = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  padding: 24px 0;
  background: linear-gradient(180deg, #020204cb 0%, rgba(22,22,23,0) 100%);
`

export const StatsWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 0.75rem;
  padding: 16px 20px;
  gap: 20px;
  background: linear-gradient(180deg, rgba(22,22,23,0) 30%, rgba(52,33,17,1) 100%);
  align-items: center;

  @media ${QUERIESV2.sm.andDown} {
    flex-direction: column;
    padding: 32px 20px;
  }
`

export const StatsItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 12px;
  align-items: center;
  padding: 20px;
`

export const TickerSegment = styled.div`
  position: relative;
  overflow: hidden;
`

export const TickerTitle = styled.div`
  margin-bottom: 36px;
  text-align: center;
  font-size: ${36 / 16}rem;
  text-transform: uppercase;
  color: var(--color-text);

  @media ${QUERIESV2.tb.andDown} {
    font-size: ${24 / 16}rem;
    line-height: ${64 / 16}rem;
  }

  @media ${QUERIESV2.sm.andDown} {
    font-size: ${16 / 16}rem;
    line-height: ${48 / 16}rem;
  }
`

export const TickerWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  flex-direction: no-wrap;
`

export const TickerAnimation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  animation: infinite-scroll 25s linear infinite;

  @keyframes infinite-scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @media ${QUERIESV2.tb.andDown} {
    justify-content: flex-start;
  }
`

export const TickerItem = styled.div`
  width: 13rem;
`

export const TitleSegment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px 0px;
  margin: auto 0;

  @media ${QUERIESV2.tb.andDown} {
    align-items: center;
  }
`

export const TickerBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  // background: linear-gradient(to right, var(--color-dark-gray), transparent 50%, var(--color-dark-gray));
  background: linear-gradient(to right, #010203, transparent 50%, #010203);
  background-position: 50%;
  background-attachment: fixed;

  @media ${QUERIESV2.tb.andDown} {
    background-position: 95%;
  }

  @media ${QUERIESV2.sm.andDown} {
    background-position: 5%;
  }
`

export const TitleLogoWrapper = styled.div`
  display: flex;
  gap: 16px;
`

export const SmallLogo = styled.img`
  width: 16px;
`

export const TitleText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: ${72 / 16}rem;
  line-height: ${86 / 16}rem;
  letter-spacing: -0.02rem;
  display: flex;
  align-items: center;
  gap: 20px;
  color: var(--color-white);

  @media ${QUERIESV2.tb.andDown} {
    font-size: ${54 / 16}rem;
    line-height: ${64 / 16}rem;
  }

  @media ${QUERIESV2.sm.andDown} {
    font-size: ${40 / 16}rem;
    line-height: ${48 / 16}rem;
  }

`;

export const DescriptionText = styled(Text)`
  max-width: 700px;
  width: 100%;
`

export const GradientTitleSegment = styled.p`
  background: linear-gradient(264.97deg, #ed8b34 24.16%, #edc5a1 61.61%),
  linear-gradient(0deg, #e0f3ff, #e0f3ff),
  linear-gradient(0deg, #ffffff, #ffffff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const BannerSegment = styled.div`
  width: auto;
  margin-auto;

  > .desktop {
    max-width: 340px;
    @media ${QUERIESV2.tb.andDown} {
      display: none;
    }
  }

  > .mobile {
    display: flex;
    width: 100%;
    max-width: 520px;
    margin: 0 auto;

    @media ${QUERIESV2.tb.andUp} {
      display: none;
    }
  }
`

export const BannerImage = styled.img`
  max-width: 100%;
  filter: drop-shadow(5px 5px 40px var(--color-secondary));
`

export const LounchButtonWrapper = styled.div`
  width: auto;
  align-self: start;

  @media ${QUERIESV2.tb.andDown} {
    align-self: center;
  }
`

export const LounchButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;

  height: 64px;
  background: var(--gradient);
  border-radius: 12px;
  text-decoration: none;

  padding: 0px 40px;
  @media ${QUERIESV2.sm.andDown} {
    height: 40px;
    padding: 0 16px;
  }
`

export const ButtonText = styled(Text)`
  color: var(--color-white);
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0;
`