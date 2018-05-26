import { Message } from '../../models/message/message';
import { USERS_LIST } from '../users/users';

const userList = USERS_LIST;

const messageList: Message[] = [
  {user: userList[0], date: new Date(), lastMessage: "Bonjour Théo"},
  {user: userList[1], date: new Date(), lastMessage: "Par rapport à la voiture"},
  {user: userList[2], date: new Date(), lastMessage: "Salut"},
  {user: userList[3], date: new Date(), lastMessage: "e ne vends pas"}
];

export const MESSAGE_LIST = messageList;


