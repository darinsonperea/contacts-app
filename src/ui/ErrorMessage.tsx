import { useNavigate } from "react-router-dom";

function ErrorMessage() {
  const navigate = useNavigate();

  return (
    <div>
      <p>Something went wrong :(</p>;
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default ErrorMessage;
