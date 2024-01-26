import Spinner from "../../ui/Spinner";

import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

import {useBanks} from "../banks/useBanks";
import BankRow from "./BankRow";

function BanksTable() {
  const { isBanksLoading, banks } = useBanks();
  if (isBanksLoading) return <Spinner />;


  return (
    <Menus>
      <Table columns="1fr 1fr 0.6fr">
        <Table.Header>
          <div>Destination</div>
          <div>Bank Information</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={banks}
          render={(bank) => <BankRow banks={bank} key={bank._id} />}
        />
      </Table>
    </Menus>
  );
}

export default BanksTable;
