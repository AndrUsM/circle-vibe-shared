import { MessageStatus, MessageType } from "src/enums";
import { File } from "./file";
import { User } from "./user";

export interface Message {
  _id: number;
  content: string;
  images: File[];
  videos: File[];
  files: File[];
  status: MessageStatus;
  chatId: number;
  receiverId: number;
  sender: User;
  createdDate: string;
  updatedDate: string;
  messageType: MessageType;
  theads: Message[];
  hidden: boolean;
}