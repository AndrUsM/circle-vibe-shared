import { Chat } from "./chat";
import { ChatParticipant } from "./chat-participant";
import { Message } from "./message";

export interface Thread {
  id: number;
  message: Message[];
  chatId: number;
  chat: Chat;
  parentMessageId: number;
  messages: Message[];
  participants: ChatParticipant[];
}