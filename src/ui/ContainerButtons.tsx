import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  gap: 35px;
`;

function ContainerButtons({ children }: { children: React.ReactNode }) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default ContainerButtons;
