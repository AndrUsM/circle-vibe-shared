import { ChatType } from "src/enums";
import { User } from "./user";
import { Message } from "./message";
import { File } from "./file";

export interface Chat {
  _id: string;
  users: User[],
  name: string;
  description: string;
  readableName: string;
  type: ChatType;
  isGroupChat: boolean;
  createdAt: Date;
  updatedAt: Date;
  hasUnreadMessages: boolean;
  empty: boolean;
  messagesCount: number;
  lastMessage: Message | null;
  usersLimit: number;
  removed: boolean;
  hidden: boolean;
  isActive: boolean;
  isArchive: boolean;
  avatar: File;
}