import React from "react";
import PropTypes from "prop-types";
import { Title } from "components/atoms/Title/Title";
import { Wrapper } from "./errorMessage.styles";

const defaultErrorMessage =
  "Something went worong . Please try again, or contact our support.";

const ErrorMessage = ({ message = defaultErrorMessage }) => {
  return (
    <Wrapper>
      <Title>Oops!</Title>
      <p>{message}</p>
    </Wrapper>
  );
};

ErrorMessage.protoTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
