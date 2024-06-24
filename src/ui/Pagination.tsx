import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/helper";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";

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

  if (pageCount <= 1) return;

  return (
    <section className="dark:*:text-white *:text-black w-custom-screen mx-auto h-10 flex items-center justify-end mt-4">
      <div className="flex items-center gap-10">
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
    </section>
  );
}

export default Pagination;
