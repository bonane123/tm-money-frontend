import { styled } from "styled-components";
import BigForm from "../Layout/send/BigForm";
import MiniForm from "../Layout/send/MiniForm";
import { useState } from "react";

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
  gap: 3.2rem;
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
    "amount-to-send": 0,
    "transfer-fees": 0,
    "receiver-gets": 0,
    transferCurrency: "",
    answer: 0,
  });
  const [answer, setAnswer] = useState("");

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
  return (
    <Main>
      <Container>
        <Button type="submit">Send Money Anonymously</Button>
        <p>
          For your privacy, when you use this form to send money, your records
          will not be saved. You won't find this transaction in your dashboard,
          and the receiver contact won't be saved in your phonebook for future
          use. Please consider signing in first, if you need any of these
          benefits.
        </p>
        <hr />
        <FormContainer>
          <BigForm
            updateFormData={updateFormData}
            updateAnswer={updateAnswer}
            answer={answer}
          />
          <MiniForm formData={formData} answer={answer} />
        </FormContainer>
      </Container>
    </Main>
  );
};

export default SendMoney;
