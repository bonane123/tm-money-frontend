import { styled } from "styled-components";
import PostedReview from "./PostedReview";
import { useReviews } from "../../features/reviews/useReviews";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 70vh;
`;

const ReviewContainer = styled.div`
  display: block;
  gap: 2rem;
`;

function UserReview() {
  const { isLoading, data, count, page } = useReviews();
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <StyledContainer>
      <ReviewContainer>
        {data.reviews.map((review) => (
          <PostedReview key={review.id} feedback={review} />
        ))}
      </ReviewContainer>
      <Pagination count={count} page={page} />
    </StyledContainer>
  );
}

export default UserReview;
