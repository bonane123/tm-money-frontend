import { styled } from 'styled-components';

const StyledForm = styled.form`
  background-color: var(--color-grey-100);
  border-radius: 8px;
  padding: 1.5rem;
`;

const StyledP = styled.p`
  margin: 2rem 0;
`;
const StyledPElement = styled.p`
  margin-bottom: 2rem;
`;

const StyledNames = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.2rem 0;
  gap: 4rem;

  @media (max-width:768px){
    flex-direction: column;
  }
`;

const StyledName = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 3rem;

  @media (max-width:768px){
    margin: 0rem;
  }
`;

const StyledLabel = styled.label`
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  background-color: transparent;
  border: 1px solid var(--color-grey-200);
  padding: .5rem 1rem;
  border-radius: 5px;
  width: 100%;
  &:focus{
    outline: none;
  }
`;
const StyledSelect = styled.select`
  background-color: transparent;
  border: 1px solid var(--color-grey-200);
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

const StyledSendButton = styled.button`
  max-width: 20rem;
  background-color: var(--color-orange-700);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: .5rem;
  margin-bottom: 2rem;
`;

function BigForm() {
  return (
    <StyledForm>
      <StyledP>Receiver Information</StyledP>
      <StyledNames>
        <StyledName>
          <StyledLabel htmlFor='receiver-first-name'>First Name</StyledLabel>
          <StyledInput
            type='text'
            id='receiver-first-name'
            name='receiver-first-name'
            placeholder='Ex: NIYIGENA'
            required
          />
        </StyledName>
        <StyledName>
          <StyledLabel htmlFor='receiver-last-name'>Last Name</StyledLabel>
          <StyledInput
            type='text'
            id='receiver-last-name'
            name='receiver-last-name'
            placeholder='Ex: Adolphe'
            required
          />
        </StyledName>
      </StyledNames>
      <StyledPElement>Destination Information</StyledPElement>
      <StyledNames>
        <StyledName>
          <StyledLabel htmlFor='destination-country'>Country</StyledLabel>
          <StyledSelect id='destination-country' name='destination-country' required>
            <option value=''>Select a country</option>
            <option value='Korea'>Korea</option>
            <option value='Japan'>Japan</option>
            <option value='USA'>USA</option>
          </StyledSelect>
        </StyledName>
        <StyledName>
          <StyledLabel htmlFor='destination-account'>Account</StyledLabel>

          <StyledSelect id='destination-account' name='destination-account' required>
            <option value=''>Select an account</option>
            <option value='Checking'>Checking</option>
            <option value='Savings'>Savings</option>
            <option value='Investment'>Investment</option>
          </StyledSelect>
        </StyledName>
        <StyledName>
          <StyledLabel htmlFor='destination-account'>
            Account-details
          </StyledLabel>
          <StyledInput
            type='text'
            id='destination-account'
            name='destination-account'
            placeholder='Ex: 500-400-222'
            required
          />
        </StyledName>
      </StyledNames>
      <StyledName>
        <StyledLabel htmlFor='destination-currency'>Currency</StyledLabel>
        <StyledSelect id='destination-currency' name='destination-currency' required>
          <option value=''>Select a currency</option>
          <option value='KRW'>KRW</option>
          <option value='USD'>USD</option>
          <option value='JPY'>JPY</option>
        </StyledSelect>
      </StyledName>
      <StyledNames>
        <StyledName>
          <StyledLabel htmlFor='amount-to-send'>
            You Send (minimum is 5000 krw)
          </StyledLabel>
          <StyledInput
            type='number'
            id='amount-to-send'
            name='amount-to-send'
            min='5000'
            step='1'
            required
          />
        </StyledName>
        <StyledName>
          <StyledLabel htmlFor='receiver-gets'>Receiver Gets</StyledLabel>
          <StyledInput
            type='number'
            id='receiver-gets'
            name='receiver-gets'
            disabled
          />
        </StyledName>
      </StyledNames>
      <div>
        <StyledSendButton type='submit'>Send Money</StyledSendButton>
      </div>
    </StyledForm>
  );
}

export default BigForm;
