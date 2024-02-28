import { hubPoolChainId } from 'utils';
import {
  Wrapper,
} from './Transfer.styled';
import { TransferForm } from './components';
import { Layout, WrongNetworkHeader } from 'components';
import { useTransferView } from './hooks/useTransferView';

const TransferView = () => {

  const {
    isConnected,
    isWrongNetwork
  } = useTransferView();
  return (
    <>
      <WrongNetworkHeader requiredChainId={hubPoolChainId} />
      <Layout maxWidth={600}>
        <Wrapper>
          <TransferForm
            isConnected={isConnected}
            isWrongNetwork={isWrongNetwork}
          />
        </Wrapper>
      </Layout>
    </>
  )
}

export default TransferView;