import styled from "styled-components";

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
  gap: 1rem;
  padding: 16px 8px 32px;
  margin: 0 auto;

  @media (min-width: 768px) {
    gap: 2rem;
    padding-left: 0;
    padding-right: 0;
    width: 80vw;
  }
`;

const Heading = styled.h1`
  font-size: 1.5rem /* 24px */;
  line-height: 2rem /* 32px */;
  color: var(--text--color);
`;

const SeparatorLine = styled.div`
  height: 1px;
  background-color: var(--green--light);
`;

function TitlePage({ title }: { title: string }) {
  return (
    <StyledSection>
      <Heading>{title}</Heading>
      <SeparatorLine />
    </StyledSection>
  );
}

export default TitlePage;
