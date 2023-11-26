import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import ChargeItem from "./ChargeItem";
import AddCharge from "./AddCharge";

function ChargesList() {
  const { charges, isLoading } = useSettings();
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <Menus>
        <Table columns="1fr 1fr 1fr 0.6fr">
          <Table.Header>
            <div>Min Amount</div>
            <div>Max Amount</div>
            <div>Charge Percentage</div>
            <div></div>
          </Table.Header>

          <Table.Body
            data={charges}
            render={(activity) => (
              <ChargeItem activity={activity} key={activity._id} />
            )}
          />
        </Table>
      </Menus>
      <AddCharge />
    </>
  );
}

export default ChargesList;
