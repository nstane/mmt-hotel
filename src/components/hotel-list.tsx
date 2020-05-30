import React, { useContext } from 'react';
import { HotelCard } from './hotel-card';
import HotelStore from '../stores/HotelStore';
import { observer } from "mobx-react"

const HotelList : React.FC<{}> = observer((props) => {
    const {hotelInfos} = useContext(HotelStore);  
    console.log('HotelList')

    return  (<>
        { 
            hotelInfos.length > 0 ? 
            hotelInfos.map((hotelInfo, index )=> (<HotelCard hotelInfo={hotelInfo} key={`hotel-info-${index}`}/>)) :
            "Loading...."
        }
    </>);
})

export default HotelList;