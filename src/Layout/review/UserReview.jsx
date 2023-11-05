import { styled } from 'styled-components';
import PostedReview from './PostedReview';

const ReviewContainer = styled.div`
  display: block;
  gap: 2rem;
`;

function UserReview() {
  return (
    <ReviewContainer>
      <PostedReview />
      <PostedReview />
      <PostedReview />
    </ReviewContainer>
  );
}

export default UserReview;
