import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 400px;
  margin: auto;
`;

const StepContainer = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const FormStepper = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Initialize your form data fields here
    field1: '',
    field2: '',
    field3: ''
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    // Submit the form data
    console.log('Form submitted:', formData);
    // You can send the formData to your backend or handle it as required
  };

  return (
    <FormContainer>
      <StepContainer isVisible={step === 1}>
        {/* Step 1: Render your form elements here */}
        <p>Step 1 - Form Elements</p>
        <input
          type="text"
          name="field1"
          value={formData.field1}
          onChange={handleInputChange}
        />
      </StepContainer>

      <StepContainer isVisible={step === 2}>
        {/* Step 2: Render your form elements here */}
        <p>Step 2 - Form Elements</p>
        <input
          type="text"
          name="field2"
          value={formData.field2}
          onChange={handleInputChange}
        />
      </StepContainer>

      <StepContainer isVisible={step === 3}>
        {/* Step 3: Render your form elements here */}
        <p>Step 3 - Form Elements</p>
        <input
          type="text"
          name="field3"
          value={formData.field3}
          onChange={handleInputChange}
        />
      </StepContainer>

      <NavigationContainer>
        {step !== 1 && (
          <Button onClick={handlePrev} disabled={step === 1}>
            Previous
          </Button>
        )}
        {step === 3 ? (
          <Button onClick={handleSubmit}>Submit</Button>
        ) : (
          <Button onClick={handleNext}>Next</Button>
        )}
      </NavigationContainer>
    </FormContainer>
  );
};

export default FormStepper;