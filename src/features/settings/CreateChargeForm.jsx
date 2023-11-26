import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { useUpdateCharge } from "./useUpdateCharge";
import { useCreateCharge } from "./useCreateCharge";

function CreateChargeForm({ chargeToEdit = {}, onCloseModal }) {
  const { _id: editId, ...editValues } = chargeToEdit;

  const isEditSesson = Boolean(editId);
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSesson ? editValues : {},
  });

  const { errors } = formState;

  const { isCreating, createNewCharge } = useCreateCharge();
  const { isUpdating, updateCharge } = useUpdateCharge();

  const isWorking = isCreating || isUpdating;

  function onSubmit(data) {
    data.minAmount = parseInt(data.minAmount);
    data.maxAmount = parseInt(data.maxAmount);
    data.chargePercentage = parseFloat(data.chargePercentage);
    if (isEditSesson) {
      updateCharge(
        { newChargeData: { ...data, id: editId } },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
    createNewCharge(
      { newChargeData: { ...data } },
      {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      }
    );
  }
}

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Min Amount" error={errors?.minAmount?.message}>
        <Input
          type="number"
          id="minAmount"
          disabled={isWorking}
          {...register("minAmount", {
            required: "This field is required",
            min: 5000, // Minimum value
          })}
        />
      </FormRow>

      <FormRow label="Max Amount" error={errors?.maxAmount?.message}>
        <Input
          type="number"
          id="maxAmount"
          disabled={isWorking}
          {...register("maxAmount", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow
        label="Charge Percentage"
        error={errors?.chargePercentage?.message}
      >
        <Input
          type="number"
          step={0.01}
          id="chargePercentage"
          disabled={isWorking}
          {...register("chargePercentage", {
            required: "This field is required",
            validate: {
              isFloat: (value) => !isNaN(value) || "Enter a valid float value",
            },
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
        <Button disabled={isWorking}>
          {isEditSesson ? "Edit Charge" : "Add Charge"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateChargeForm;
