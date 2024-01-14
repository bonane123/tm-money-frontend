import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const StyledMiniForm = styled.div`
  /* background-color: var(--color-grey-100); */
  border: 1px solid var(--color-grey-200);
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

function MiniForm({formData, answer, destinationCurrency}) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [senderAmount, setSenderAmount] = useState(0);
  const [transferFees, setTransferFees] = useState(0);
  const [percentageCharges, setPercentageCharges] = useState(0);
  const [receiverAmount, setReceiverAmount] = useState(0);
  const { transferCurrency } = formData;


  useEffect(() => {
    // Update other values based on the changes in formData
    const amountToSend = parseFloat(formData['amountToSend']) || 0;
    const transferFeesValue = parseFloat(formData['transferFees']) || 0;
    const percentageChargesValue = formData['percentageCharges'] || 0;
    const receiverGets = formData['receiverGets'] || 0;
  
    // Update other values or states as needed
    // ...
    setSenderAmount(amountToSend);
    setTransferFees(transferFeesValue);
    setPercentageCharges(percentageChargesValue);
    setReceiverAmount(receiverGets);
  
  }, [formData, destinationCurrency]);
  
  let newCharge = '';
  if (percentageCharges === 5000){
    newCharge = `${transferCurrency} ${percentageCharges}`
  }
  else newCharge = `${percentageCharges * 100}%`;
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
            <p>{format(currentTime, "M/d/yyyy")}</p>
          </StyledLeftDiv>
        </StyledDateTime>
        <StyledDateTime>
          <StyledRightDiv>
            <p>Transfer Amount:</p>
          </StyledRightDiv>
          <StyledLeftDiv>
            <p>{"KRW"} {Math.round(senderAmount).toLocaleString()}</p>
          </StyledLeftDiv>
        </StyledDateTime>
        {/* <StyledDateTime>
          <StyledRightDiv>
            <p>Received Amount:</p>
          </StyledRightDiv>
          <StyledLeftDiv>
            <p>{transferCurrency} {parseFloat(receiverAmount).toFixed(2)}</p>
          </StyledLeftDiv>
        </StyledDateTime> */}
        <StyledDateTime>
          <StyledRightDiv>
            <p>Transfer Fees: </p>
          </StyledRightDiv>
          <StyledLeftDiv>
            <p>Flat fee: {"KRW"} {Math.round(transferFees).toLocaleString()}</p>
            <p>Percentage fee: {newCharge}</p>
          </StyledLeftDiv>
        </StyledDateTime>
      </StyledTransfer>
      <StyledH3>After fees:</StyledH3>
      <StyledDateTime>
        <StyledRightDiv>
          <p>Exchange Rate:</p>
        </StyledRightDiv>
        <StyledLeftDiv>
          <p>{transferCurrency ? transferCurrency : "USD"} 1 = {destinationCurrency ? destinationCurrency : "KRW"} {(answer).toLocaleString()}</p>
        </StyledLeftDiv>
      </StyledDateTime>
      <StyledDateTime>
        <StyledRightSpecial>
          <p>Recipient Gets:</p>
        </StyledRightSpecial>
        <StyledLeftSpecial>
          <p>{destinationCurrency} {Math.round(receiverAmount).toLocaleString()}</p>
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
