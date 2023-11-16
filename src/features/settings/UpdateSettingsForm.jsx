import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';
import { useSettings } from './useSettings';
// import { useUpdateSetting } from './useUpdateSetting';

function UpdateSettingsForm() {
  const {
    isLoading,
    charges: {
      minAmount,
      maxAmount,
      chargePercentage
    } = {},
  } = useSettings();

  // const { isUpdating, updateSetting } = useUpdateSetting();

  if (isLoading) return <Spinner />;

  function handleUpdate(e, field) {
    const { value } = e.target;

    if (!value) return;
    // updateSetting({ [field]: value });
  }

  return (
    <Form>
      <FormRow label='Minimum Amount'>
        <Input
          type='number'
          id='min-nights'
          defaultValue={minAmount}
          // disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, 'minAmount')}
        />
      </FormRow>

      <FormRow label='Maximum Amount'>
        <Input
          type='number'
          id='max-nights'
          defaultValue={maxAmount}
          // disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, 'maxAmount')}
        />
      </FormRow>

      <FormRow label='Charge Percentage'>
        <Input
          type='number'
          id='max-guests'
          defaultValue={chargePercentage}
          // disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, 'chargePercentage')}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
