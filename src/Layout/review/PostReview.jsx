import { styled } from "styled-components";
import StarRating from "./StarRating";
import { useUser } from "../../features/authentication/useUser";
import Spinner from "../../ui/Spinner";
import { useForm } from "react-hook-form";
import { useCreateReview } from "../../features/reviews/useCreateReview";
import { useState } from "react";

const StyleReview = styled.div`
  height: 35rem;
  background-color: var(--color-grey-100);
  padding: 1rem 2rem;
  border-radius: 5px;

  @media (max-width: 768px) {
    & h2 {
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
const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function PostReview() {
  const { user, isLoading } = useUser();
  const [rating, setRating] = useState(0)
  const { register, formState, handleSubmit, reset } = useForm();
  const { createNewReview, isLoading: isReviewLoading } = useCreateReview(reset);
  const { errors } = formState;

  if (isLoading) {
    return <Spinner />;
  }

  if(!user){
    return <Spinner />;
  }
  const handleSetRating = (rating) => {
    setRating(rating);
  };
  function onSubmit({review}) {
    createNewReview(
      { review, rating, user: user.data.user._id }
    );
  }
  return (
    <StyleReview>
      <ReviewForm onSubmit={handleSubmit(onSubmit)}>
        <StyledTextAreaDiv>
          <label>Your Feedback</label>
          <StyledTextArea
            placeholder="Please provide your feedback"
            rows="8"
            cols="10"
            type="text"
            disabled={isReviewLoading}
            id="review"
            {...register("review", {
              required: "Please provide your feedback",
            })}
          ></StyledTextArea>
        </StyledTextAreaDiv>
        <StyledFormDiv>
          {errors && <Error>{errors?.review?.message}</Error>}
        </StyledFormDiv>

        <StyledFormSubmit>
          <StarRating onSetRating={handleSetRating}/>
          <StyledBtnReview disabled={isReviewLoading}>Submit</StyledBtnReview>
        </StyledFormSubmit>
      </ReviewForm>
    </StyleReview>
  );
}

export default PostReview;
