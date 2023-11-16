import TableOperations from '../../ui/TableOperations';
import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';
function ReviewTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField='rating'
        options={[
          { value: 'all', label: 'All' },
          { value: 'low-rating', label: 'Low rating' },
          { value: 'high-rating', label: 'High rating' },
        ]}
      />
      <SortBy
        options={[
          { value: 'rating-asc', label: 'Sort by rating (low)' },
          { value: 'rating-desc', label: 'Sort by rating (high)' },
        ]}
      />
    </TableOperations>
  );
}

export default ReviewTableOperations;
