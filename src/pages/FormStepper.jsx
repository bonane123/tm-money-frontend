// FormStepper.js
import { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 400px;
  margin: auto;
`;

const StepContainer = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

const FormStepper = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  return (
    <FormContainer>
      <StepContainer isVisible={step === 1}>
        {/* Step 1: Render your form elements here */}
        <p>Step 1 - Form Elements</p>
        <label>Name</label>
        <input type="text" name="name"/>
        <button onClick={handleNext}>Next</button>
      </StepContainer>

      <StepContainer isVisible={step === 2}>
        {/* Step 2: Render your form elements here */}
        <p>Step 2 - Form Elements</p>
        <label>Sender</label>
        <input type="text" name="name"/>
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </StepContainer>

      <StepContainer isVisible={step === 3}>
        {/* Step 3: Render your form elements here */}
        <p>Step 3 - Form Elements</p>
        <label>Destination</label>
        <input type="text" name="name"/>
        <button onClick={handlePrev}>Previous</button>
      </StepContainer>
    </FormContainer>
  );
};

export default FormStepper;
