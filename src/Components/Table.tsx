// Table.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface TableProps<T extends { id: number }> {
  title: string;
  data: T[];
  columns: { label: string; key: keyof T }[];
  onRowClick?: (itemId: number) => void;

}

const Table: React.FC<TableProps<any>> = ({ title, data, columns, onRowClick }) => {
  return (
      <div>
        <div className="text-[#A4A7B7] text-base font-normal leading-6 pt-[31px]">{title}</div>
        <div className="flex flex-col border border-[a4a7b766] rounded bg-white h-[589px] mt-8">
          <table>
            <thead>

            <tr className="flex flex-row h-[74px] items-center border-b border-[#E5E5E5] gap-[70px]">
                <td>
                    <div className="border border-[#C4C4C4] rounded-sm bg-white h-[14px] w-[14px] ml-6"></div>
                </td>
                {columns.map((column) => (
                  <th key={column.label} className="text-[#A4A7B7] font-medium text-base leading-6 -ml-10">
                    {column.label}
                  </th>
              ))}
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item.id}
                    className="cursor-pointer flex flex-row h-[74px] items-center border-b border-[#E5E5E5] gap-12"
                    onClick={() => onRowClick && onRowClick(item.id)}>
                    <td>
                        <div className="border border-[#C4C4C4] rounded-sm bg-white h-[14px] w-[14px] ml-6"></div>
                    </td>
                  {columns.map((column) => (
                      <td key={column.label} className="flex flex-row justify-between gap-[75px]">
                        {column.key === 'title' ? (
                            <Link to={`/details/${item.id}`}>
                              <div className="text-[#303B54] font-medium text-base leading-6 -ml-[18px]">{item[column.key]}</div>
                            </Link>
                        ) : (
                            <div className="text-[#303B54] font-medium text-base leading-6 -ml-[18px]">{item[column.key]}</div>
                        )}
                      </td>
                  ))}
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default Table;
