import { Chat } from "./chat";
import { Message } from "./message";

export interface Thread {
  id: number;
  message: Message[];
  chatId: number;
  chat: Chat;
}