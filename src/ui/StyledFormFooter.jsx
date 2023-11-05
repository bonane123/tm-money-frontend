import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledFormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0rem;
`;

const StyledFooterP = styled.p`
  font-size: 1.5rem;
  padding-right: 0.5rem;
`;
const StyledFormLink = styled(Link)`
  color: var(--color-orange-700);
  font-weight: bold;
  text-decoration: underline;
`;

function StyledFormFooter(props) {
  return (
    <StyledFormHeader>
      <StyledFooterP>{props.question}</StyledFooterP>
      <StyledFormLink to={props.newLink} >{props.linkDesc}</StyledFormLink>
    </StyledFormHeader>
  );
}

export default StyledFormFooter;
