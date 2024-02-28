// Import necessary components and hooks
import { styled } from "styled-components";
import BigForm from "../Layout/send/BigForm";
import MiniForm from "../Layout/send/MiniForm";
import { useState } from "react";

// Styled components for the radio buttons and checkboxes
const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const RadioButton = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const CheckBox = styled.input`
  cursor: pointer;
`;
const SpanEl = styled.span`
  font-size: 1.2rem;
  color: var(--color-orange-700);
  font-weight: 800;
`;

const BankInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
// const BankInfoItemContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   border: 1px solid var(--color-orange-700);
//   border-radius: 8px;
//   padding: 1rem;

// `;
const BankInfoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-orange-700);
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  ${(props) =>
    props.isSelected &&
    `
    background-color: var(--color-orange-100);
  `}
`;

const BankInfoText = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-orange-700);
`;

const Main = styled.main`
  background-color: var(--color-grey-0);
  padding: 4rem 4.8rem 6.4rem;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Button = styled.button`
  max-width: 30rem;
  background-color: var(--color-orange-700);
  border: none;
  padding: 1rem 2rem;
  border-radius: 5rem;
`;

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 3rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

const SendMoney = () => {
  const [formData, setFormData] = useState({
    amountToSend: 0,
    transferFees: 0,
    receiverGets: 0,
    transferCurrency: "",
    answer: 0,
    paymentMethod: "", // New state to track the selected payment method
    selectedDirection: "",
    bankInfo: null,
  });

  const [answer, setAnswer] = useState("");
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [selectedBank, setSelectedBank] = useState(null);

  const updateFormData = (data, newAnswer) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
      answer: newAnswer,
    }));
  };

  const updateAnswer = (newAnswer) => {
    setAnswer(newAnswer);
    updateFormData(formData, newAnswer);
  };

  // Function to handle radio button change
  const handlePaymentMethodChange = (event) => {
    const selectedMethod = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      paymentMethod: selectedMethod,
      selectedDirection: "",
      bankInfo: null,
    }));

    // Show checkboxes if Wire Transfer is selected
    setShowCheckboxes(selectedMethod === "wireTransfer");
  };

  return (
    <Main>
      <Container>
        {/* <Button>Send Money Anonymously</Button> */}
        <p>
          For your privacy, when you use this form to send money, your records
          will not be saved. You will not find this transaction in your
          dashboard, and the receiver contact will not be saved in your
          phonebook for future use. Please consider signing in first if you need
          any of these benefits.
        </p>
        <hr />
        {/* Radio buttons for payment method */}
        

        {/* Rest of the form components */}
        <FormContainer>
          <BigForm
            selectedBank={selectedBank}
            updateFormData={updateFormData}
            updateAnswer={updateAnswer}
            answer={answer}
            selectedDirection={formData.selectedDirection}
            bankInfo={formData.bankInfo}
            paymentMethod={formData.paymentMethod}
            setFormData={setFormData}
          />
          <MiniForm
            formData={formData}
            answer={answer}
            destinationCurrency={formData.destinationCurrency}
          />
        </FormContainer>
      </Container>
    </Main>
  );
};

export default SendMoney;
