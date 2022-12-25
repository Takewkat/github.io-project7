interface Props {
  message: string;
}

function ErrorMessage ({ 
  message 
}: Props) {
  return <h1>{message}</h1>;
}

export default ErrorMessage;