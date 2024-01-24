// Table.tsx
import React, {useEffect, useState} from 'react';
import film_img_card from '../../assets/film-img-card.png';

interface TableComponentProps {
  title: string;
  endpoint? : string;
  columns: { label: string; key: string }[];
  details?: { label: string; key: string }[];
  identity: string;
  detailsOpened: () => void;
  detailsImg: string;
  detailKey?: string;
  closeDetails: boolean;
}

const TableComponent: React.FC<TableComponentProps> = ({ title, endpoint, details, columns, identity, detailsImg, detailsOpened, detailKey, closeDetails}) => {

    detailKey ||= 'name';
    const [data, setData] = useState([]);
    const [selectedItem, setItem] = useState();

    const itemSelected = (item: any) => {
        setItem(item);
        item && detailsOpened();
    };

    const fetchData = async () => {
        try {
            if(endpoint) {
                const response = await fetch(endpoint);
                const data = await response.json();
                setData(data.results.map((film: any) => ({...film, url: film.url})));
            }
        } catch (error) {
            console.error('Error fetching films:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if(closeDetails) {
            setItem(undefined);
        }
    }, [closeDetails]);

    return (
      !selectedItem || !details ?
      <div className="w-full pl-[38px] pr-[42px] pt-8 pb-12">
        <div className="text-[#A4A7B7] text-base font-normal leading-6 pt-[31px]">{title}</div>
        <div className="flex flex-col border border-[a4a7b766] rounded bg-white h-[589px] mt-8 pr-4">
          <table>
            <thead>

            <tr className="flex flex-row h-[74px] items-center border-b border-[#E5E5E5] gap-[75px]">
                <td className="">
                    <div className="border border-[#C4C4C4] rounded-sm bg-white h-[14px] w-[14px] ml-6"></div>
                </td>
                {columns.map((column) => (
                  <th key={column.label} className="min-w-[100px] text-[#A4A7B7] font-medium text-base leading-6 text-left -ml-6">
                    {column.label}
                  </th>
              ))}
            </tr>
            </thead>
            <tbody>
            {
                data.map((item) => (
                <tr key={item[identity]}
                    className="cursor-pointer flex flex-row h-[74px] items-center border-b border-[#E5E5E5] gap-12"
                    onClick={() => itemSelected(item)}>
                    <td>
                        <div className="border border-[#C4C4C4] rounded-sm bg-white h-[14px] w-[14px] gap-[75px] ml-6"></div>
                    </td>
                  {columns.map((column) => (
                      <td key={column.label} className="min-w-[110px] flex flex-row justify-between gap-[75px]">
                          <div className="min-w-[80px] overflow-x-scroll text-[#303B54] font-medium text-base leading-6 w-auto h-full">{item[column.key]}</div>
                      </td>
                  ))}
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div> :
      <div className="w-full">
          <div className="flex flex-row gap-7 px-7 pt-11">
              <div className=" w-[318px] h-[450px]">
                  <img src={film_img_card} alt="Movie Image" className="bg-contain bg-no-repeat" />
              </div>
              <div className="flex flex-col">
                  <div className="text-black text-4xl leading-6 font-bold mb-7">
                      {selectedItem[detailKey]}
                  </div>
                  <div className="text-[#303B54] text-base font-medium leading-6">
                      {details.map((item)=> <div>{item.label}: {selectedItem[item.key]}</div>)}
                  </div>
                  {/* Add other details here */}
              </div>
          </div>
      </div>
  );
};

export default TableComponent;
