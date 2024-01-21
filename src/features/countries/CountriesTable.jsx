import Spinner from "../../ui/Spinner";

import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

import { useCountries } from "./useCountries";
import CountryRow from "./CountryRow";

function CountriesTable() {
  const { isCountriesLoading, countriesList } = useCountries();
  if (isCountriesLoading) return <Spinner />;


  return (
    <Menus>
      <Table columns="1fr 0.5fr 2.2fr 0.6fr">
        <Table.Header>
          <div>Country</div>
          <div>Currency</div>
          <div>Banks</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={countriesList}
          render={(country) => <CountryRow countries={country} key={country._id} />}
        />
      </Table>
    </Menus>
  );
}

export default CountriesTable;
