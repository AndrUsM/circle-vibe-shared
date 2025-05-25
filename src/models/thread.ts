import { Chat } from "./chat";
import { Message } from "./message";
import { ThreadParticipant } from "./thread-participant";

export interface Thread {
  id: number;
  message: Message[];
  chatId: number;
  chat: Chat;
  messages: Message[];
  participants: ThreadParticipant[];
}