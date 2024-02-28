import styled from "@emotion/styled";
import { PrimaryButton, Text } from "components";
import { useConnection } from "hooks";

export const ConnectWalletButton = ({ reasonToConnect }) => {
  const { connect } = useConnection();
  return (
    <Button
      size="lg"
      backgroundColor="gradient"
      onClick={() => {
        connect()
      }}
    >
      <Text color="white" size="lg" weight={500}>
        Connect wallet to {reasonToConnect}
      </Text>
    </Button>
  )
}

const Button = styled(PrimaryButton)`
  width: 100%;
`
export const TransferButton = () => {

  return (
    <Button
      size="lg"
      backgroundColor="gradient"
      onClick={() => {

      }}
    >
      <Text color="white" size="lg" weight={500} >
        Transfer
      </Text>
    </Button>
  )
}
