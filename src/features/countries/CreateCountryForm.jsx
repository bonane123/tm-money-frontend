import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { useUpdateCountries } from "./useUpdateCountries";
import { useCreateCountry } from "./useCreateCountry";

function CreateCountryForm({ countryToEdit = {}, onCloseModal }) {
  const { _id: editId, ...editValues } = countryToEdit;


  const isEditSesson = Boolean(editId);
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSesson ? editValues : {},
  });

  const { errors } = formState;

  const { isCreating, createNewCountry } = useCreateCountry();
  const { isUpdating, updateSingleCountry } = useUpdateCountries();

  const isWorking = isUpdating

  function onSubmit(data) {
    if(editId){
      updateSingleCountry(
        { newCountryData: { ...data }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );

    }
    else 
      createNewCountry(
        { ...data },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Country" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "this field is required",
          })}
        />
      </FormRow>
      <FormRow label="Currency" error={errors?.currency?.message}>
        <Input
          type="text"
          id="currency"
          disabled={isWorking}
          {...register("currency", {
            required: "this field is required",
          })}
        />
      </FormRow>

      <FormRow label="Banks & Accounts" error={errors?.account?.message}>
        <Textarea
          type="text"
          id="currency"
          disabled={isWorking}
          defaultValue=""
          {...register("account", {
            required: "this field is required",
          })}
        />
      </FormRow>
      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button 
        disabled={isWorking}
        >
          {isEditSesson ? "Edit Country" : "Add Country"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCountryForm;
