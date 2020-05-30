import { observable, action, reaction } from "mobx";
import { createContext } from "react";
import HotelInfo from "../apimodels/HotelInfo";

const hotelApiUrl =
  "https://us-central1-mmt-interview.cloudfunctions.net/helloWorld"; 

export const inrCurrencyFormater = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' });

class HotelStore {
  public hotelApiResponse: HotelInfo[] = [];

  @observable public hotelInfos: HotelInfo[] = [];
  constructor() {
    reaction(() => this.hotelInfos, _ => console.log(this.hotelInfos.length));
    this.loadhotelInfo();
  }

  async loadhotelInfo() {
    await fetch(hotelApiUrl)
      .then(response => response.json())
      .then(json => {
        this.hotelApiResponse = json;
        this.hotelInfos = json;
      });
  }

  @action
  public sortHotelInfo = (sortBy: string, reverse: boolean) => {
    console.log(`sortBy : ${sortBy} and reverse: ${reverse}`);
    
    let tmp:HotelInfo[] = [...this.hotelApiResponse];

    if (reverse) {
      tmp.reverse();
    } else {
      switch (sortBy) {
        case "price": {
          tmp.sort(
            (h1, h2) => h1.price - h2.price
          );
          break;
        }
        case "rating": {
          tmp.sort(
            (h1, h2) => h1.starRating - h2.starRating
          );
          break;
        }
        case "rooms": {
          tmp.sort(
            (h1, h2) => h1.roomsAvailable - h2.roomsAvailable
          );
          break;
        }
      }
    }

    this.hotelInfos = [...tmp];
  };
}

export default createContext(new HotelStore());
