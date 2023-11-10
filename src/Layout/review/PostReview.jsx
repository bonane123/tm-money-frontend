import { styled } from "styled-components";
import StarRating from "./StarRating";

const StyleReview = styled.div`
  height: 35rem;
  background-color: var(--color-grey-100);
  padding: 1rem 2rem;
  border-radius: 5px;

  @media (max-width: 768px) {
    & h2{
      font-size: 1.7rem;
      font-weight: 600;
    }
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

const ReviewForm = styled.form`
  margin-bottom: 1rem;
`;
const StyledFormDiv = styled.div`
  margin: 1.5rem 0;
  display: flex;
  gap: 2rem;
`;
const StyledFormSubmit = styled.div`
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const StyledInput = styled.input`
  background-color: transparent;
  border: 1px solid var(--color-grey-200);
  padding: 0.2rem 1rem;
  border-radius: 5px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const StyledTextAreaDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledTextArea = styled.textarea`
  background-color: transparent;
  border: 1px solid var(--color-grey-200);
  padding: 0.2rem 1rem;
  border-radius: 5px;
  margin-top: 1rem;
  width: 100%;
  &:focus {
    outline: none;
  }
`;
const StyledBtnReview = styled.button`
  background-color: var(--color-orange-700);
  border: none;
  border-radius: var(--border-radius-sm);
  outline: none;
  padding: 0.5rem 1rem;
  right: 0;
`;

function PostReview() {
    return (
        <StyleReview>

  <ReviewForm>

    {/* <StyledFormDiv>
      <label>Name</label>
      <StyledInput type='text' placeholder='Enter your Name' />
    </StyledFormDiv>
    <StyledFormDiv>
      <label>Email</label>
      <StyledInput type='lg:text' placeholder='Enter your email' />
    </StyledFormDiv> */}
    <StyledTextAreaDiv>
      <label>Your Comment</label>
      <StyledTextArea
        placeholder='Please enter your Message'
        type={'number'}
        rows='8'
        cols={'10'}
      ></StyledTextArea>
    </StyledTextAreaDiv>

    <StyledFormSubmit>
      <StarRating />
      <StyledBtnReview>Submit</StyledBtnReview>
    </StyledFormSubmit>
  </ReviewForm>
</StyleReview>
    )
 }
 
 export default PostReview
 


