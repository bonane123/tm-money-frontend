// import Row from '../../ui/Row';
import CountriesTable from '../features/countries/CountriesTable';
// import Heading from '../../ui/Heading';


import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Countries() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All Countries</Heading>
      </Row>
      <Row>
        <CountriesTable />
      </Row>
    </>
  );
}

export default Countries;
