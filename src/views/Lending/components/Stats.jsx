import {
  StatsSegment,
  StatsWrapper,
  StatsItemWrapper,
} from '../Lending.styled';
import { Text } from 'components';

const StatsData = [
  {
    title: "Average Tokens / Tx",
    data: "8+",
    description: "Save Your Time"
  },
  {
    title: "Total Transfered",
    data: "1.62m+",
    description: "Best way for bulk transfer"
  },
  {
    title: "Fees Saved",
    data: "3.71m+",
    description: "41% of total fees saved"
  },
]

export const Stats = () => {
  return (
    <StatsSegment >
      <StatsWrapper >
        {StatsData.map((stat, index) => (
          <StatsItemWrapper key={index}>
            <Text size="md">{stat.title}</Text>
            <Text size="3xl" casing="uppercase" weight="500">{stat.data}</Text>
            <Text size="md" color='text'>{stat.description}</Text>
          </StatsItemWrapper>
        ))}

      </StatsWrapper>
    </StatsSegment>
  )
}

