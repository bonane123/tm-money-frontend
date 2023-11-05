import styled from 'styled-components';

const StyledFormRowHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  padding: 1.2rem 0;

  @media (max-width:768px){
    flex-direction: column;
    padding: .5rem 0;

  }
`;

// const StyledFormRow = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.8rem;
//   padding: 1.2rem 0;
// `;

// const Label = styled.label`
//   font-weight: 500;
// `;

// const Error = styled.span`
//   font-size: 1.4rem;
//   color: var(--color-red-700);
// `;



function FormRowHorizontal({children, label}) {
  return (
    <StyledFormRowHorizontal>
        {children}
    </StyledFormRowHorizontal>
  );
}

export default FormRowHorizontal;
