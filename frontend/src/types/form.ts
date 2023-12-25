import { Restaurant } from "./restaurant";

export interface FormContact {
  nameContact: string;
  EmailContact: string;
  numberContact?: string;
  note?: string;
}
export interface FormConversation {
  numberAdult: number;
  numberChildren: number;
  dateArrival?: Date;
  hourArrival?: String;
}

export interface FormBookingConfirmation extends FormContact, FormConversation, Restaurant {
}

const InitialFormContact: FormContact = {
  nameContact: "",
  EmailContact: "",
  numberContact: "",
  note: ""
}

const InitialFormConversation: FormConversation = {
  numberAdult: 1,
  numberChildren: 1,
  dateArrival: new Date("2020-02-14"),
  hourArrival: "01:00"
}



export { InitialFormContact, InitialFormConversation }