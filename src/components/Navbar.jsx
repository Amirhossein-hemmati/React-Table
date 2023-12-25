import {
  ArrowRightIcon,
  Bars3BottomLeftIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import DragAndDropModal from "./DragAndDropModal";

function Navbar({
  data,
  pageSize,
  setPageSize,
  setCurrentPage,
  setSearchBox,
  setIsOpen,
  setUpdateColumns,
  isOpen,
  headers,updateColumns,columnOrder
}) {
  const [changeInput, setChangeInput] = useState("")

  
  useEffect(() => {
    setSearchBox(""); // Clear the search box when data changes
  }, [data]);

  const handlePageSizeChange = (event) => {
    setPageSize(Number(event.target.value));
    setCurrentPage(1); // Reset to the first page when changing page size
  };

  const inputHandler = () => {
    //convert input text to lower case
    let lowerCase = changeInput.toLowerCase();
    setSearchBox(lowerCase); 
  
  }

  

  return (
    <div className="w-full mt-[20px]">
      <div className="w-full text-right flex justify-end items-center">
        <div className="mr-[10px]">فعالیت کاربران</div>
        <button>
          <ArrowRightIcon className="w-4 h-4" />
        </button>
      </div>
      <div className="w-full flex justify-between items-center flex-row-reverse rounded-[10px] mt-[40px]">
        <div className="flex justify-center items-center flex-row-reverse">
          <div className="flex justify-center items-start relative">
            <input
              type="text"
              dir="rtl"
              placeholder="جستجو"
              className="w-[400px] h-[44px] rounded-[5px] bg-sl border-[1px] pr-[30px] pl-[28px] outline-gray-300 outline-[1px] border-slate-200 placeholder:text-right"
              value={changeInput}
              onChange={(e) => setChangeInput(e.target.value)}
            />
            <MagnifyingGlassIcon className="w-5 h-5 absolute top-[14px] right-[8px] ml-[4px] text-gray-400" />
            <button onClick={inputHandler} className="w-[100px] h-[36px] absolute top-[4px] right-[296px] text-white bg-blue-950 rounded-md">
              جستجو
            </button>
          </div>
          <button  className="w-[40px] h-[44px] border-[1px] rounded-md flex justify-center items-center mr-[12px]">
            <FunnelIcon className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <div className="flex justify-center items-center flex-row-reverse">
          <div className="flex justify-center items-center flex-row-reverse gap-x-[10px]">
            <select
              value={pageSize}
              onChange={handlePageSizeChange}
              className="h-[44px] rounded-[5px] border-[1px] text-right cursor-pointer"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={40}>40</option>
            </select>
          </div>
          <button onClick={() => setIsOpen(true)} className="w-[40px] h-[44px] border-[1px] rounded-md flex justify-center items-center mr-[12px]">
            <Bars3BottomLeftIcon className="w-5 h-5 text-gray-500" />
          </button>
          {isOpen && <DragAndDropModal columnOrder={columnOrder} updateColumns={updateColumns} setIsOpen={setIsOpen} headers={headers} setUpdateColumns={setUpdateColumns}/>}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
