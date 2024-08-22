import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/helper";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";
import styled from "styled-components";

const StyledSection = styled.section`
  width: 80vw;
  height: 40px;
  margin: 1rem auto 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & div {
    display: flex;
    align-items: center;
    gap: 40px;
  }
`;

function Pagination({ count }: { count?: number }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const length = count ? count : 1;

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const pageCount = Math.ceil(length / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next.toString());
    setSearchParams(searchParams);
  }

  function previousPage() {
    const previous = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", previous.toString());
    setSearchParams(searchParams);
  }

  if (currentPage > pageCount || pageCount > length) previousPage();
  if (pageCount <= 1) return;

  return (
    <StyledSection>
      <div>
        <p>
          {currentPage} de {pageCount}
        </p>
        <div>
          <button className="mr-6" onClick={previousPage}>
            <ArrowLeft />
          </button>
          <button onClick={nextPage}>
            <ArrowRight />
          </button>
        </div>
      </div>
    </StyledSection>
  );
}

export default Pagination;
