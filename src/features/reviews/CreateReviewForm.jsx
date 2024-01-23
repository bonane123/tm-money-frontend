import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
// import { useCreateReview } from "./useCreateReview";
import { useUpdateReview } from "./useUpdateReview";

function CreateReviewForm({ reviewToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = reviewToEdit;


  const isEditSesson = Boolean(editId);
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSesson ? editValues : {},
  });

  const { errors } = formState;

  // const { isCreating, createReview } = useCreateReview();
  const { isUpdating, updateSingleReview } = useUpdateReview();

  const isWorking = isUpdating;

  function onSubmit(data) {
    updateSingleReview(
      { newReviewData: { ...data }, id: editId },
      {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      }
    );
    // else
    //   createReview(
    //     { ...data },
    //     {
    //       onSuccess: () => {
    //         reset();
    //         onCloseModal?.();
    //       },
    //     }
    //   );
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Rating" error={errors?.rating?.message}>
        <Input
          type="number"
          id="rating"
          disabled={isWorking}
          defaultValue={0}
          {...register("rating", {
            required: "this field is required",
            min: 0, // Minimum value
            max: 5, // Maximum value
          })}
        />
      </FormRow>

      <FormRow label="Message" error={errors?.review?.message}>
        <Textarea
          type="number"
          id="message"
          disabled={isWorking}
          defaultValue=""
          {...register("review", {
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
        <Button disabled={isWorking}>
          {isEditSesson ? "Edit Review" : "Add Review"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateReviewForm;
