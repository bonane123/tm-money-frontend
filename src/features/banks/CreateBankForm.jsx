import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
// import { useUpdateCountries } from "./useUpdateCountries";
// import { useCreateBank } from "./useCreateBank";

function CreateBankForm({ BankToEdit = {}, onCloseModal }) {
  const { _id: editId, ...editValues } = BankToEdit;


  const isEditSesson = Boolean(editId);
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSesson ? editValues : {},
  });

  const { errors } = formState;

  // const { isCreating, createNewBank } = useCreateBank();
  // const { isUpdating, updateSingleBank } = useUpdateCountries();

  // const isWorking = isUpdating

  function onSubmit(data) {
    if(editId){
      updateSingleBank(
        { newBankData: { ...data }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );

    }
    else 
      createNewBank(
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
      <FormRow label="Bank" error={errors?.name?.message}>
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
          {isEditSesson ? "Edit Bank" : "Add Bank"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateBankForm;
