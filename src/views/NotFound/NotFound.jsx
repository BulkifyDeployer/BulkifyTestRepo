import { Footer, Layout } from 'components';
import {
  Wrapper,
  Content,
  Title,
  Body,
  Link,
  CloudWrapper,
  StyledEmptyCloud
} from './NotFound.styled';

const NotFound = ({ custom404Message }) => {

  return (
    <Wrapper>
      <Content>
        <CloudWrapper>
          <StyledEmptyCloud />
        </CloudWrapper>
        <Title>404</Title>
        <Body>{custom404Message || "Page not found"}</Body>
        <Link to="/">Go back to Across</Link>
      </Content>
      <Footer />
    </Wrapper>
  )
}

export default NotFound;