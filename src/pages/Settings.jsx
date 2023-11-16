import SettingLayout from '../features/settings/SettingLayout';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

function Settings() {
  return (
    <Row>
      <Heading as='h1'>Charges</Heading>
      <SettingLayout />
    </Row>
  );
}

export default Settings;
