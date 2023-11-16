import Heading from '../ui/Heading';
import Row from '../ui/Row';
import UsersTable from '../features/users/UsersTable';

function UsersList() {
    return (
        <>
      <Row type='horizontal'>
        <Heading as='h1'>All Users</Heading>
        <p>TEST</p>
      </Row>
      <Row>
        <UsersTable />
      </Row>
    </>
    )
}

export default UsersList

