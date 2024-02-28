import {
  InputBlockWrapper
} from './TransferForm.styled';

import { CardWrapper, SectionWrapper } from 'components';
import { Divider } from 'views/Transfer/Transfer.styled';

export const TransferForm = (

) => {
  return (
    <SectionWrapper title="Transfer">
      <CardWrapper>
        rofl
        <Divider />


        <InputBlockWrapper>
          <div className="relative flex flex-1 justify-center">
            <div className="absolute left-0 top-0 flex flex-col justify-between" style={{ "height": "-webkit-fill-available" }}>
              <button
                className="flex items-center justify-between rounded-full py-1 px-1 text-xl text-white bg-dark-gray hover:bg-dark-gray-50"
                type='button'
              >
                <div className="flex items-center gap-2">
                  <img src="" alt="USDC" className="token-avatar h-4 w-4 rounded-full" loading="lazy" />
                  <p className="text-gray-200 whitespace-nowrap text-sm font-normal md:text-base lg:text-base xl:text-base">symbol</p>
                  x
                </div>
              </button>
              <div className="flex items-center gap-x-1.5">
                <div className="flex items-center gap-x-1 ml-1">
                  <p className="text-gray-200 text-right text-xs">balances</p>
                </div>
                <button type="button" className="text-secondary text-xs font-semibold">MAX</button>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 text-secondary text-right text-xs">
              ~$summary
            </div>

            <div className="h-full w-full rounded border-0 pb-7 text-right">
              <div className="ant-form-item" style={{ 'width': '50%', 'float': 'right' }}>
                <input
                  className="w-full h-full bg-transparent text-right text-gray-200 text-base font-medium border-none md:text-xl lg:text-xl xl:text-xl [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none outline-none"
                />
              </div>
            </div>

          </div>

          {/* {totalInputs > 1 && ( */}
          <button type='button' className="rounded-full bg-dark hover:bg-dark-gray p-1">
            x
          </button>
          {/* )} */}
        </InputBlockWrapper>


      </CardWrapper>
    </SectionWrapper>

  )
}