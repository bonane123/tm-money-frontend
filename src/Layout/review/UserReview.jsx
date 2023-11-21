import { styled } from 'styled-components';
import PostedReview from './PostedReview';
import { useReviews } from '../../features/reviews/useReviews';
import Spinner from '../../ui/Spinner';
import Pagination from '../../ui/Pagination';

const ReviewContainer = styled.div`
  display: block;
  gap: 2rem;
`;

function UserReview() {
  const {isLoading, data} = useReviews()
  if (isLoading){
    return <Spinner/>
  }

  return (
    <ReviewContainer>
      {data.data.reviews.map((review) =>( 
        <PostedReview key={review.id} feedback={review} />
      ))}
      <Pagination/>
      
    </ReviewContainer>
  );
}

export default UserReview;
