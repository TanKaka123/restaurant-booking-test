export interface Reservation {
    restaurant: {
        title:string
    };
    numberAdult: number;
    numberChildren: number;
    dateArrival: string;
    hourArrival: string;
    nameContact: string;
    numberContact: string;
    EmailContact: string;
    note?: string;
  }