import styled from "styled-components";
import Button from "../../ui/Button";
import ImageVerify from "../../../public/nobgemailverify.png";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Img = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 60rem;
`;

const StyledH1 = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 768px) {
      margin: 2rem;
      font-size: 1.7rem;
    }
`;

const StyledDiv = styled.div`
display: flex;
justify-content: center;
margin: 0 auto;
`;

function VerifyEmail() {
  const [validUrl, setValidUrl] = useState(false);
  const param = useParams();
  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `http://localhost:3001/api/v1/users/${param.id}/verify/${param.token}`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        console.log(data);
        setValidUrl(true);
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [param]);
  return (
    <>
      {validUrl ? (
        <div>
          <StyledH1>Email verified successfully</StyledH1>
          <Img src={ImageVerify} alt="verify-email-image" />
          <StyledDiv>
          <Button size="large" as={Link} to={"/login"}>
            Continue to login
          </Button>

          </StyledDiv>
        </div>
      ) : (
        <StyledH1>404 Not Found</StyledH1>
      )}
    </>
  );
}

export default VerifyEmail;
