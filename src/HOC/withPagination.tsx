import { ElementType, useEffect, useState } from "react";
import Pagination from "../ui/Pagination";
import { PAGE_SIZE } from "../utils/helper";
import { ContactDataType } from "../utils/types";

export function withPagination(WrappedComponent: ElementType) {
  return function CardsWithPagination({
    data,
    page,
  }: {
    data: ContactDataType[];
    page: number;
  }) {
    const [contacts, setContacts] = useState<ContactDataType[]>(data);

    useEffect(() => {
      const from = (page - 1) * PAGE_SIZE;
      const to = from + PAGE_SIZE;
      setContacts(data.slice(from, to));
    }, [data, page]);

    return (
      <>
        <WrappedComponent contacts={contacts} flag={true} />
        <Pagination count={data.length} />
      </>
    );
  };
}
