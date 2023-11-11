import { styled } from 'styled-components';
import StarRating from '../StarRating';
import { getTimeDifferenceString } from '../../utils/helpers';

const StyledReview = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-100);
  max-width: 100%;
  margin-bottom: 1rem;
  border-radius: 5px;
  padding: 1rem 2rem;
  white-space: normal;

  @media (max-width:768px){
    padding: 0rem;
  }
`;

const StyledMessage = styled.p`
  margin-bottom: 1.5rem;
  white-space: normal;
`;

const StyledRating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;
function PostedReview({feedback}) {
  const {review, rating, createdAt, user} = feedback;
  const timeDifference = getTimeDifferenceString(createdAt)
  return (
    <StyledReview>
      <StyledMessage>
        {review}
      </StyledMessage>
      <StyledRating>
        <p>{user.fullName.split(" ")[0]}</p>
        <StarRating maxRating={rating} size={24} />
      </StyledRating>
      <p>{timeDifference}</p>
    </StyledReview>
  );
}

export default PostedReview;
