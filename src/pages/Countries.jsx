// import Row from '../../ui/Row';
import AddCountry from '../features/countries/AddCountry';
import CountriesTable from '../features/countries/CountriesTable';
// import Heading from '../../ui/Heading';


import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Countries() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All Countries</Heading>
        <AddCountry/>
      </Row>
      <Row>
        <CountriesTable />
      </Row>
    </>
  );
}

export default Countries;
