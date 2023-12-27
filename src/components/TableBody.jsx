import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

function TableBody({ searchBox, data, columnOrder, headers }) {

  const handleRowClick = (id) => {
    navigate(`/dynamic-table/${id}`);
  };

  const navigate = useNavigate();

  const filteredData = data.filter((el) => {
    //if no input the return the original
    if (searchBox === "") {
      return el;
    }

    //return the item which contains the user input
    else {
      return el.title.toLowerCase().includes(searchBox);
    }
  });

  return (
    <>
      {filteredData.map((item, index) => {
        const truncatedTitle =
          item.title.slice(0, 30) + (item.title.length > 20 ? "..." : "");
        const truncatedBody =
          item.body.slice(0, 80) + (item.body.length > 50 ? "..." : "");
          // if (columnOrder.length === 0) {
          //   columnOrder = headers;
          //  }
        return (
          <tr
            className={`border-b-[1px] border-gray-200 cursor-pointer hover:bg-gray-300 transition duration-500 ease-in-out ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            }`}
            key={item.id}
            onClick={() => handleRowClick(item.id)}
          >
            {columnOrder.map((column) => {
              const key = column.name || column;
              const value = item[key];
              return (
                <>
                  <td
                    className="text-center"
                    key={`${item.id}-${key}`}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={value.length > 20 ? value : ""}
                  >
                    {key === "title" ? truncatedTitle : key === "body" ? truncatedBody : value}
                  </td>
                </>
              );
            })}
            <td className=" py-[32px] flex justify-center items-center">
              <PencilSquareIcon
                onClick={(event) => {
                  event.stopPropagation();
                  alert(`this is row ${item.id}`);
                }}
                className="w-5 h-5 cursor-pointer"
              />
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default TableBody;
