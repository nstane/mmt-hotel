import React, { useContext, useState } from "react";
import HotelStore from "../stores/HotelStore";
import Link from '@material-ui/core/Link';

interface SortBarState {
  [key: string]: any;
}

export const SortBar: React.FC<{}> = () => {
  const { sortHotelInfo } = useContext(HotelStore);

  const [sortState] = useState<SortBarState>({});

  const sortTypes: string[] = ["rating", "price", "rooms"];

  return (
    <div style={{ margin: 10, padding: 10 }}>
      {sortTypes.map((sortType, index) => (
       <button
          style={{ margin: 5 }}
          onClick={() => {
            const sortOrder = sortState[sortType] === undefined ?  true : sortState[sortType];

            console.log(sortOrder);

            sortHotelInfo(sortType, sortOrder);

            sortState[sortType] = !sortOrder;

            console.log(sortState[sortType]);
          }}
          key={`sortType-${sortType}-${index}`}
        >
          {sortType}
        </button>
      ))}
    </div>
  );
};
