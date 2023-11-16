import Spinner from '../../ui/Spinner';

import { useReviews } from './useReviews';
import ReviewRow from './ReviewRow';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';

function ReviewsTable() {
  const { isLoading, data: reviews } = useReviews();
  const [searchParams] = useSearchParams();
  if (isLoading) return <Spinner />;
  // 1) Filtering
  const filterValue = searchParams.get('rating') || 'all';

  let filteredReviews;

  if (filterValue === 'all') filteredReviews = reviews.data.reviews;
  if (filterValue === 'high-rating')
    filteredReviews = reviews.data.reviews.filter((review) => review.rating > 3);
  if (filterValue === 'low-rating')
    filteredReviews = reviews.data.reviews.filter((review) => review.rating <= 3);

  // 2) SORT
  const sortBy = searchParams.get('sortBy') || 'name-asc';
  const [field, direction] = sortBy.split('-');

  const modifier = direction === 'asc' ? 1 : -1;
  const sortedReviews = filteredReviews.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table columns='1fr 0.5fr 2.2fr 0.6fr'>
        <Table.Header>
          <div>Names</div>
          <div>Rating</div>
          <div>Message</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedReviews}
          render={(review) => <ReviewRow feedback={review} key={review.id} />}
        />
      </Table>
    </Menus>
  );
}

export default ReviewsTable;
