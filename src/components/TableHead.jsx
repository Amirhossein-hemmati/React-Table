
function TableHead({headers, columnOrder}) {

  if (Array.isArray(columnOrder) && columnOrder.length === 0) {
    columnOrder = headers;
   }
  return (
    <thead className="w-full h-[50px] bg-gray-200 border-b-[1px] border-slate-200">
          <tr>
            {columnOrder.map((header, index) => (
              <th
                key={index}
                className={`p-2 ${index === 0 ? "rounded-tl-[10px]" : ""}`}
              >
                <div className="text-[16px] font-medium">{header.name || header}</div>
              </th>
            ))}
            <th className="rounded-tr-[10px] p-2">edit</th>
          </tr>
        </thead>
  )
}

export default TableHead