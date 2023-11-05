import { styled } from 'styled-components';

const StyledFormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`;

const Styledp = styled.p`
  font-size: 2rem;
  padding-right: 1rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.7rem;
    font-bold: normal;
  }
`;
const StyledSpan = styled.span`
  font-size: 2rem;
  color: var(--color-orange-700);
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.7rem;
    font-bold: normal;
  }
`;

function StyledHeaderH2(props) {
  return (
    <StyledFormHeader>
      <Styledp>{props.description}</Styledp>
      <StyledSpan>TM MONEY TRANSFER</StyledSpan>
    </StyledFormHeader>
  );
}

export default StyledHeaderH2;
