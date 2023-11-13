import Empty from '../../ui/Empty';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import Spinner from '../../ui/Spinner';
import UserRow from './UserRow';
import { useUsers } from './useUsers';

function UsersTable() {
  const { data, isLoading } = useUsers();
  
  if (isLoading) return <Spinner />;
  const usersInfos = data.data.users
  console.log(usersInfos)
  
  // if (!usersInfo.length) return <Empty resourceName='usersInfo' />;
  return (
    <Menus>
      <Table columns='1fr 1fr 1fr 1fr'>
        <Table.Header>
          <div>Full Name</div>
          <div>Email</div>
          <div>Join Date</div>
          <div>Role</div>

        </Table.Header>

        <Table.Body
          data={usersInfos}
          render={(userInfo) => (
            <UserRow key={userInfo._id} userInfo={userInfo} />
          )}
        />
        <Table.Footer>
          {/* <Pagination count={count} page={page} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default UsersTable;
