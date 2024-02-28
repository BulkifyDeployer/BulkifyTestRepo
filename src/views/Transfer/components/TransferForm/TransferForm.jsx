import {
  InputBlockWrapper,
  AddTokenButton,
  ReceiverInputWrapper,
  ReceiverInput,
  CustomLabel,
  ReceiverWrapper,
  FeesBlockWrapper,
  FeesCalcWrapper,
  FeesItem
} from './TransferForm.styled';

import { CardWrapper, SectionWrapper } from 'components';
import { Divider } from 'views/Transfer/Transfer.styled';
import { TransferInputBlock } from '../TransferInputBlock';

export const TransferForm = (

) => {
  return (
    <SectionWrapper title="Transfer">
      <CardWrapper>
        Transfer Tokens
        <Divider />
        <InputBlockWrapper>
          <TransferInputBlock />

        </InputBlockWrapper>
        <AddTokenButton
          textColor="secondary"
          size="md"
        >
          + Add tokens
        </AddTokenButton>

        <ReceiverWrapper>
          <CustomLabel
            size="sm"
            color='text'
          >
            Receiver Address
          </CustomLabel>
          <ReceiverInputWrapper>

            <ReceiverInput
              maxLength={42}
            />
          </ReceiverInputWrapper>
        </ReceiverWrapper>
        <Divider />

        <FeesBlockWrapper>

          <CustomLabel
            weight={600}
            color="text"
            size="md"
          >
            Fees:
          </CustomLabel>
          <FeesCalcWrapper>
            {/* {inputs.map((input, index) => ( */}
            <FeesItem>
              {/* <span key={index} className="flex gap-x-2"> */}
              {/* <strong>{calculateFees(input.value)}</strong> */}
              <CustomLabel
                size="md"
                color="text"
                weight={600}
              >
                {1}
              </CustomLabel>
              {/* {input.token && insufficientBalanceTokens[input.token.address] && ( */}
              <CustomLabel
                color="error"
                size="md"
                weight={500}
              >
                Insufficient Balance!
              </CustomLabel>
              {/* )} */}
              {/* {input.token ? input.token.symbol : ''} */}
            </FeesItem>
            {/* ))} */}
            <FeesItem>
              <CustomLabel>~ 0</CustomLabel> Gas
            </FeesItem>
          </FeesCalcWrapper>

        </FeesBlockWrapper>

        <Divider />
      </CardWrapper>
    </SectionWrapper>

  )
}