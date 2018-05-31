import { Profil } from "../user/user";

export interface Message {
  user: Profil;
  date: Date;
  lastMessage:  string;
}
