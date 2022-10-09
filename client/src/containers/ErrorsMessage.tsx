import React from "react";

interface Props {
  message: string;
}

const ErrorMessage: React.FunctionComponent<Props> = ({ message }) => {
  return <h1>{message}</h1>;
}

export default ErrorMessage;