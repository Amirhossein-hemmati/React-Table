import ReactPaginate from "react-paginate";

function Pagination({setCurrentPage, totalPages}) {
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <div className="my-[20px]">
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={totalPages} //Set the total number of pages based on your data
        marginPagesDisplayed={1}
        pageRangeDisplayed={4}
        onPageChange={handlePageClick}
        containerClassName="flex items-center justify-center max-w-full" // Use Flexbox to center items horizontally
        activeClassName="py-[3px] rounded-[5px] bg-blue-500 text-white"
        pageClassName="mx-1" // Add margin to each page item
        previousClassName="mx-1" // Add margin to the previous button
        nextClassName="mx-1" // Add margin to the next button
        pageLinkClassName="px-3 py-1 border rounded" // Add padding and border to each page link
        previousLinkClassName="px-3 py-1 border rounded" // Add padding and border to the previous button link
        nextLinkClassName="px-3 py-1 border rounded"
        disabledLinkClassName="opacity-50 cursor-not-allowed"
      />
    </div>
  );
}

export default Pagination;
