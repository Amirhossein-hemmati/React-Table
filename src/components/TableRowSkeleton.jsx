import Skeleton from "react-loading-skeleton";
import ReactPaginate from "react-paginate";
import "react-loading-skeleton/dist/skeleton.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function TableRowSkeleton() {
  return (
    <div className="w-full h-auto rounded-[10px] bg-white border-[1px] border-gray-300 flex justify-start items-center flex-col">
      <div className="w-full">
        <div className="w-full flex justify-around items-center rounded-[10px] bg-white mt-[20px]">
          <div className="w-[30%] flex justify-center items-start relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-[70%] h-[50px] rounded-[5px] border-[1px] pl-[28px] outline-gray-400 outline-[2px] border-slate-400"
            />
            <MagnifyingGlassIcon className="w-4 h-4 absolute top-[18px] left-[60px] ml-[4px] text-gray-400" />
          </div>
          <div className="w-[30%] flex justify-center items-center flex-row-reverse gap-x-[10px]">
            <div className="w-[12%] text-[16px] font-bold">:فیلتر</div>
            <select className="rtl w-[40%] h-[50px] rounded-[5px] border-[1px] border-slate-400 text-right">
              <option value=""></option>
            </select>
          </div>
        </div>
      </div>
      <h1 className="w-[95%] font-bold text-[24px] text-right mt-[10px]">
        جدول
      </h1>
      <table className="w-[95%] mt-[20px]">
        <thead className="w-full h-[50px] bg-gray-200 border-b-[1px] border-slate-200">
          <tr>
            <th className="w-[60px] rounded-tl-[10px] relative p-2">
              <div className="text-[16px] font-medium">شماره</div>
              <div className="absolute top-[16px] right-0 h-[24px] border-r border-gray-300"></div>
            </th>
            <th className="w-[120px] relative p-2">
              <div className="text-[16px] font-medium">شماره کاربر</div>
              <div className="absolute top-[16px] right-0 h-[24px] border-r border-gray-300"></div>
            </th>
            <th className="w-[340px] relative p-2">
              <div className="text-[16px] font-medium">عنوان</div>
              <div className="absolute top-[16px] right-0 h-[24px] border-r border-gray-300"></div>
            </th>
            <th className="w-[900px] relative p-2">
              <div className="text-[16px] font-medium">توضیحات</div>
              <div className="absolute top-[16px] right-0 h-[24px] border-r border-gray-300"></div>
            </th>
            <th className="w-[60px] rounded-tr-[10px] p-2">
              <div className="text-[16px] font-medium">اصلاحات</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {[...Array(10)].map((_, i) => (
            <tr
              key={i}
              className="border-b-[1px] border-gray-200 cursor-pointer hover:bg-gray-100 transition duration-500 ease-in-out"
            >
              <td className="px-[10px]">
                <Skeleton />
              </td>
              <td className="px-[10px]">
                <Skeleton />
              </td>
              <td className="px-[10px]">
                <Skeleton />
              </td>
              <td className="px-[10px]">
                <Skeleton />
              </td>
              <td className="px-[10px] py-[60px]">
                <Skeleton />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="my-[20px]">
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          breakLabel="..."
          breakClassName="break-me"
          pageCount={10} //Set the total number of pages based on your data
          marginPagesDisplayed={1}
          pageRangeDisplayed={4}
          containerClassName="flex items-center justify-center max-w-full" // Use Flexbox to center items horizontally
          activeClassName="py-[3px] rounded-[5px] bg-blue-500 text-white"
          pageClassName="mx-1" // Add margin to each page item
          previousClassName="mx-1" // Add margin to the previous button
          nextClassName="mx-1" // Add margin to the next button
          pageLinkClassName="px-3 py-1 border rounded" // Add padding and border to each page link
          previousLinkClassName="px-3 py-1 border rounded" // Add padding and border to the previous button link
          nextLinkClassName="px-3 py-1 border rounded"
        />
      </div>
    </div>
  );
}

export default TableRowSkeleton;
