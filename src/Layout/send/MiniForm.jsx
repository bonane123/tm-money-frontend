import { styled } from 'styled-components';

const StyledMiniForm = styled.div`
  background-color: var(--color-grey-100);
  border-radius: 8px;
  padding: 1.5rem;
  height: 70%;

  @media (max-width:1200px){
    height: 100%;
  }
`;

const StyledH2 = styled.h2`
  font-size: 1.7rem;
  font-weight: 600;
`;
const StyledH3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-grey-500);
  margin-bottom: 1rem;
`;

const StyledTransfer = styled.div`
  margin-bottom: 2rem;
`;

const StyledDateTime = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const StyledRightDiv = styled.div`
  width: 50%;
`;
const StyledRightSpecial = styled.div`
  width: 50%;
  color: var(--color-orange-700);
`;

const StyledLeftDiv = styled.div`
  width: 50%;
  font-size: 1.4rem;
  color: var(--color-grey-400);
`;
const StyledLeftSpecial = styled.div`
  width: 50%;
  font-size: 1.4rem;
  color: var(--color-orange-700);
`;

const StyledRemark = styled.p`
font-size: 1.5rem;
`;

function MiniForm() {
  return (
    <StyledMiniForm>
      <StyledH2>YOUR INVOICE WILL LOOK LIKE THIS</StyledH2>
      <StyledH3>(this is not a real invoice)</StyledH3>
      <StyledTransfer>
        <StyledDateTime>
          <StyledRightDiv>
            <p>Data and Time:</p>
          </StyledRightDiv>
          <StyledLeftDiv>
            <p>4/11/2023, 10:12:23 AM</p>
          </StyledLeftDiv>
        </StyledDateTime>
        <StyledDateTime>
          <StyledRightDiv>
            <p>Transfer Amount:</p>
          </StyledRightDiv>
          <StyledLeftDiv>
            <p>KRW 0</p>
          </StyledLeftDiv>
        </StyledDateTime>
        <StyledDateTime>
          <StyledRightDiv>
            <p>Transfer Fees:</p>
          </StyledRightDiv>
          <StyledLeftDiv>
            <p>Flat fee: 0</p>
            <p>Percentage fee: 0%</p>
          </StyledLeftDiv>
        </StyledDateTime>
      </StyledTransfer>
      <StyledH3>After fees: KRW 0</StyledH3>
      <StyledDateTime>
        <StyledRightDiv>
          <p>Exchange Rate:</p>
        </StyledRightDiv>
        <StyledLeftDiv>
          <p>KRW 1 = MWK 0.680270</p>
        </StyledLeftDiv>
      </StyledDateTime>
      <StyledDateTime>
        <StyledRightSpecial>
          <p>Recipient Gets:</p>
        </StyledRightSpecial>
        <StyledLeftSpecial>
          <p>MWK 0</p>
        </StyledLeftSpecial>
      </StyledDateTime>
      <StyledRemark>
        Recipient may receive less due to fees charged by the recipient’s
        service provider.
      </StyledRemark>
    </StyledMiniForm>
  );
}

export default MiniForm;
