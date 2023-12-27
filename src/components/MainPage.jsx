import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Tooltip } from "react-tooltip";
import TableRowSkeleton from "./TableRowSkeleton";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Pagination from "./Pagination";
import { json } from "react-router-dom";

function MainPage() {
  const [data, setData] = useState([]); // all data
  const [currentPage, setCurrentPage] = useState(1); // which page
  const [isLoading, setIsLoading] = useState(false); // create for skeleton
  const [pageSize, setPageSize] = useState(10); // number of data in each page
  const [totalPages, setTotalPage] = useState(0);
  const [searchBox, setSearchBox] = useState(""); // create for search
  const [isOpen, setIsOpen] = useState(false);
  // array of string column order
  const [columnOrder, setColumnOrder] = useState([]);
  const [headers, setHeaders] = useState([]); // Initialize headers with an empty array

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
        const totalCount = response.headers["x-total-count"];
        setTotalPage(Math.ceil(totalCount / +pageSize));
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [currentPage, pageSize ]);

  // useEffect(() => {
  //   const headers = Object.keys(data[0] ?? {});

  //   const currentOrder = JSON.parse(localStorage.getItem("test")) ?? headers;

  //   setColumnOrder(currentOrder);
  // }, []);

  useEffect(() => {
    if (data.length > 0) {
      const newHeaders = Object.keys(data[0]);
      setHeaders(newHeaders);
      // Populate columnOrder with the keys from the first data object
      setColumnOrder(newHeaders);
    }
   }, [data]);


   useEffect(() => {
    localStorage.setItem("columnOrder", JSON.stringify(columnOrder))
}, [columnOrder]);



  if (isLoading && currentPage === 1) {
    return <TableRowSkeleton />;
  }
  

  const handleToggleColumnActivity = (test) => {
    setColumnOrder(test);
  };

  return (
    <div className="w-[95%] h-auto flex justify-around items-start flex-col">
      <Navbar
        data={data}
        pageSize={pageSize}
        setPageSize={setPageSize}
        setCurrentPage={setCurrentPage}
        setSearchBox={setSearchBox}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        headers={headers}
        handleToggle={handleToggleColumnActivity}
      />
      <div className="w-full h-auto rounded-[10px] flex justify-start items-center flex-col">
        <table className="w-full mt-[20px]">
          <TableHead columnOrder={columnOrder} headers={headers} />
          <tbody>
            <TableBody
              headers={headers}
              searchBox={searchBox}
              data={data}
              setData={setData}
              columnOrder={columnOrder}
            />
          </tbody>
        </table>
        <Tooltip id="my-tooltip" float={true} />
        <Pagination setCurrentPage={setCurrentPage} totalPages={totalPages} />
      </div>
    </div>
  );
}

export default MainPage;
