
import BanksTable from '../features/banks/BanksTable';
// import AddCountry from '../features/countries/AddCountry';


import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Banks() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All Banks</Heading>
        {/* <AddBank/> */}
      </Row>
      <Row>
        <BanksTable />
      </Row>
    </>
  );
}

export default Banks;
