// import Row from '../../ui/Row';
import ReviewsTable from '../features/reviews/ReviewsTable';
// import Heading from '../../ui/Heading';
import AddReview from '../features/reviews/AddReview';
import ReviewTableOperations from '../features/reviews/ReviewTableOperations';

import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All reviews</Heading>
        <ReviewTableOperations  />
      </Row>
      <Row>
        <ReviewsTable />
        <AddReview />
      </Row>
    </>
  );
}

export default Cabins;
