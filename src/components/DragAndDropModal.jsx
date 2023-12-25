import {
  ArrowPathIcon,
  ArrowsUpDownIcon,
  ExclamationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function DragAndDropModal({ setIsOpen, headers, setUpdateColumns ,updateColumns}) {
  const [test, setTest] = useState(...(headers || []));



  console.log("re-render");

  const handleOnDragEnd = (result) => {
    const items = Array.from(headers);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setUpdateColumns(items);
  };

  return (
    <div>
      <div
        onClick={() => setIsOpen(false)}
        className="w-[100vw] h-[100vh] inset-0 fixed bg-gray-400 opacity-20 "
      ></div>
      <div className="w-[28%] min-h-[400px] absolute top-[120px] left-[500px] bg-white rounded-md">
        <div className="w-full flex flex-row-reverse justify-between items-center px-[12px] mt-[20px]">
          <div>ترتیب ستون‌ها</div>
          <button onClick={() => setIsOpen(false)}>
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="columnName">
            {(provided) => (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="columnName"
              >
                {headers.map((item, index) => {
                  return (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                      axis="vertical"
                    >
                      {(provided) => (
                        <li
                          className="h-[40px] bg-purple-300 mt-[20px] mx-[16px] cursor-pointer rounded-md flex flex-row-reverse justify-between items-center px-[16px]"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="text-purple-800">{item.name}</div>
                          <div>
                            <ArrowsUpDownIcon className="w-4 h-4" />
                          </div>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        <div className="flex flex-row-reverse justify-around items-center px-[16px] mt-[20px]">
          <div>
            <ExclamationCircleIcon className="w-5 h-5" />
          </div>
          <div>شما قادر به غیرفعال کردن ستون آیدی نیستید</div>
        </div>
        <div className="flex justify-end items-center mt-[20px]">
          <button className="w-[120px] h-[40px] rounded-md bg-purple-900 flex justify-around items-center mr-[16px]">
            <div className="text-white">پیش فرض</div>
            <div>
              <ArrowPathIcon className="w-5 h-5 text-white" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DragAndDropModal;