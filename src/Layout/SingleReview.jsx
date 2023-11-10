import { styled } from 'styled-components';
import StarRating from './StarRating';
import { formatDate } from '../utils/helpers';

const StyledReview = styled.div`
  display: flex;
  flex-direction: column;
  max-width:400px;
  /* height: 250px; */
  border-radius: 5px;
  background-color: var(--color-grey-100);
  padding: 1rem 2rem;
  white-space: normal;

  @media (max-width:768px){
    max-width: 100%;
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
function SingleReview({ comment }) {
  const { createdAt, user, rating, review } = comment;
  return (
    <StyledReview>
      <StyledMessage>{review}</StyledMessage>
      <StyledRating>
        <p>{formatDate(createdAt)}</p>
        <StarRating maxRating={rating} size={24} />
      </StyledRating>
      <p>{user.fullName.split(' ')[0]}</p>
    </StyledReview>
  );
}

export default SingleReview;
