import { MessageStatus, MessageType } from "src/enums";
import { File } from "./file";
import { User } from "./user";

export interface Message {
  _id: string;
  content: string;
  images: File[];
  videos: File[];
  files: File[];
  status: MessageStatus;
  chatId: string;
  receiver: User;
  sender: User;
  createdDate: Date;
  updatedDate: Date;
  messageType: MessageType;
  theads: Message[];
  removed: boolean;
  hidden: boolean;
}