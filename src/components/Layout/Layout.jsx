import { QUERIESV2 } from "utils";
import styled from "@emotion/styled";
import { Footer, SvgSection } from "components"


export const Layout = ({ children, maxWidth }) => {
  return (
    <>
      {/* <SvgSection /> */}
      <Wrapper>
        <InnerWrapper maxWidth={maxWidth}>
          {children}
        </InnerWrapper>
        <Footer />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: space-between;

  /* Subtract to account for header */
  min-height: calc(100vh - 72px);

  @media ${QUERIESV2.sm.andDown} {
    /* Subtract to account for header */
    min-height: calc(100vh - 64px);
  }
`

const InnerWrapper = styled.div`
  background-color: transparent;
  width: 100%;
  min-height: fit-content;
  margin: 0px auto 32px;
  display: flex;
  flex-direction: column;
  gap: 100px;

  padding: 0px 24px;
  max-width: ${({ maxWidth }) => maxWidth + 48}px;
  @media ${QUERIESV2.sm.andDown} {
    margin: 0px auto;
    padding: 0px 12px;
    max-width: ${({ maxWidth }) => maxWidth + 24}px;
  }
`

