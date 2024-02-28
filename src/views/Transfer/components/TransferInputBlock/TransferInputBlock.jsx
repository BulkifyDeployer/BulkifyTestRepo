import {
  Wrapper,
  SelecotrBlockWrapper,
  SelectorButton,
  TokenIcon,
  StyledText,
  BalanceWrapper,
  Button,
  SummaryText,
  InputWrapper,
  InnerInputWrapper,
  Input,
  DeleteButton
} from './TransferInputBlock.styled'
import { ChevronDown, XCircle } from 'react-feather'


export const TransferInputBlock = () => {
  return (
    <>
      <Wrapper>
        <SelecotrBlockWrapper>
          <SelectorButton
            type='button'
          >
            <TokenIcon src="" alt="" loading="lazy" />
            <StyledText
              size="md"
              color='text'
              casing='uppercase'
            >
              symbol
            </StyledText>
            <ChevronDown width="12px" />
          </SelectorButton>
          <BalanceWrapper>

            <StyledText
              color='text'
              size='sm'
            >
              balance
            </StyledText>

            <Button
              type="button"
              size="sm"
              textColor="secondary"
            >
              Max
            </Button>
          </BalanceWrapper>
        </SelecotrBlockWrapper>
        <SummaryText
          size="sm"
          color="secondary"
        >
          ~$summary
        </SummaryText>
        <InputWrapper>
          <InnerInputWrapper>
            <Input

            />
          </InnerInputWrapper>
        </InputWrapper>
      </Wrapper>
      {/* {totalInputs > 1 && ( */}
      <DeleteButton type='button'>
        <XCircle width={'16px'} />
      </DeleteButton>
      {/* )} */}
    </>
  )
}