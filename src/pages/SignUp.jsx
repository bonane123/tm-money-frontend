import { styled } from "styled-components";
import NewSignupForm from "../features/authentication/NewSignupForm";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  /* grid-template-columns: 68rem; */
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;
function SignUp() {

    return (
        <LoginLayout>
            <NewSignupForm/>
        </LoginLayout>
    )
}

export default SignUp
