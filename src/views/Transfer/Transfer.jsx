import { hubPoolChainId } from 'utils';
import {
  Wrapper,
} from './Transfer.styled';
import { TransferForm } from './components';
import { Layout, WrongNetworkHeader } from 'components';

const TransferView = () => {
  return (
    <>
      <WrongNetworkHeader requiredChainId={hubPoolChainId} />
      <Layout maxWidth={600}>
        <Wrapper>
          <TransferForm />
        </Wrapper>
      </Layout>
    </>
  )
}

export default TransferView;