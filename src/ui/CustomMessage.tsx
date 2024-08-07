import styled from "styled-components";

const Message = styled.h1`
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: var(--text--color);
  margin: 2rem 0;
`;

function CustomMessage({ message }: { message: string }) {
  return <Message>{message}</Message>;
}

export default CustomMessage;
