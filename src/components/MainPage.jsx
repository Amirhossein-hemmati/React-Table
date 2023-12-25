import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Tooltip } from "react-tooltip";
import TableRowSkeleton from "./TableRowSkeleton";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Pagination from "./Pagination";

function MainPage() {
  const [data, setData] = useState([]); // all data
  const [currentPage, setCurrentPage] = useState(1); // which page
  const [isLoading, setIsLoading] = useState(false); // create for skeleton
  const [pageSize, setPageSize] = useState(10); // number of data in each page
  const [totalPages, setTotalPage] = useState(0);
  const [searchBox, setSearchBox] = useState(""); // create for search
  const [isOpen, setIsOpen] = useState(false);
  const [updateColumns, setUpdateColumns] = useState([]); // update each item that drag and drop to the new place

  // array of string column order
  const [columnOrder, setColumnOrder] = useState([]);

  useEffect(() => {
    console.log(columnOrder)
  }, [columnOrder]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _start: (currentPage - 1) * pageSize,
          _limit: pageSize,
        },
      })
      .then((response) => {
        setData(response.data);
        setColumnOrder(Object.keys(response.data[0] || {}));
        const totalCount = response.headers["x-total-count"];
        setTotalPage(Math.ceil(totalCount / +pageSize));
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [currentPage, pageSize]);

  if (isLoading && currentPage === 1) {
    return <TableRowSkeleton />;
  }

  const headers = Object.keys(data[0] ?? {});

  const headersWithIds = headers.map((header, index) => ({
    id: String(index + 1),
    name: header,
  }));

  console.log(updateColumns);

  return (
    <div className="w-[95%] h-auto flex justify-around items-start flex-col">
      <Navbar
        setColumnOrder={setColumnOrder}
        columnOrder={columnOrder}
        data={data}
        pageSize={pageSize}
        setPageSize={setPageSize}
        setCurrentPage={setCurrentPage}
        setSearchBox={setSearchBox}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        setUpdateColumns={setUpdateColumns}
        headers={headers}
        updateColumns={updateColumns}
      />
      <div className="w-full h-auto rounded-[10px] flex justify-start items-center flex-col">
        <table className="w-full mt-[20px]">
          <TableHead headers={headers} />
          <tbody>
            <TableBody searchBox={searchBox} data={data} />
          </tbody>
        </table>
        <Tooltip id="my-tooltip" float={true} />
        <Pagination setCurrentPage={setCurrentPage} totalPages={totalPages} />
      </div>
    </div>
  );
}

export default MainPage;
