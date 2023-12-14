// import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import StyledHeader2 from "../../ui/StyledHeaderH2";
import StyledFormFooter from "../../ui/StyledFormFooter";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const StyledSignupSpace = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 3rem 0;
`;

function LoginForm() {
  const { isLoading, login } = useLogin();
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ email, password }) {
    login({ email, password }, { onSettled: () => reset() });
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <StyledHeader2 description="Welcome to" />
        <FormRowVertical label="Email address" error={errors?.email?.message}>
          <Input
            type="email"
            id="email"
            // This makes this form better for password managers
            autoComplete="username"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "please provide a valid email address",
              },
            })}
            disabled={isLoading}
          />
        </FormRowVertical>

        <FormRowVertical label="Password">
          <Input
            type="password"
            id="password"
            autoComplete="current-password"
            {...register("password", {
              required: "This field is required",
            })}
            disabled={isLoading}
          />
        </FormRowVertical>
        <FormRowVertical>
          <StyledSignupSpace>
            <Button size="large" disabled={isLoading}>
              {!isLoading ? "Sign in" : <SpinnerMini />}
            </Button>
          </StyledSignupSpace>
        </FormRowVertical>
        <StyledFormFooter
          linkDesc="Sign up"
          question="Don't have an account?"
          newLink="/signup"
        />
      </Form>
    </>
  );
}

export default LoginForm;
