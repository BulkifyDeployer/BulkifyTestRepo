import React from "react";
import { useLocation } from "react-router-dom";
import { Stats } from "./components/Stats";
import { Layout } from "components";
import demosvg3 from 'assets/icons/111.svg';
import mobile from 'assets/trade.webp';
import ethereum from 'assets/eth.gif';
import { RocketLaunchIcon } from '@heroicons/react/20/solid'

import {
  ExternalWrapper,
  Wrapper,
  TitleSegment,
  SmallLogo,
  TitleLogoWrapper,
  TitleText,
  DescriptionText,
  GradientTitleSegment,
  BannerSegment,
  BannerImage,
  LounchButtonWrapper,
  LounchButton,
  ButtonText,
} from './Lending.styled'
import { PartnersTicker } from "./components/Ticker";



const LendingView = () => {

  const location = useLocation();

  return (
    <>
      <ExternalWrapper>
        <Layout
          maxWidth={1360}
        >
          <Wrapper>
            <BannerSegment>
              <BannerImage src={ethereum} className="desktop" />
              <BannerImage src={mobile} className="mobile" />
            </BannerSegment>
            <TitleSegment>
              <TitleLogoWrapper>
                <SmallLogo src={demosvg3} />
                Bulkify
              </TitleLogoWrapper>
              <TitleText>
                Bulkify
                <GradientTitleSegment>
                  Transfer App
                </GradientTitleSegment>
              </TitleText>
              <DescriptionText size="xl">
                Bulkify is a bulk sender app for L2s and rollups chains. We're
                Open Source project with open Code.
              </DescriptionText>
              <LounchButtonWrapper>
                <LounchButton to={{ pathname: '/transfer', search: location.search }}>
                  <RocketLaunchIcon width={'16px'} />
                  <ButtonText>Lounch App</ButtonText>
                </LounchButton>
              </LounchButtonWrapper>
            </TitleSegment>

          </Wrapper>

          <PartnersTicker />

          <Stats />

        </Layout>

      </ExternalWrapper >
    </>
  )
}

export default LendingView;