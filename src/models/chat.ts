import { ChatType } from "src/enums";
import { User } from "./user";
import { Message } from "./message";

export interface Chat {
  _id: string;
  users: User[],
  name: string;
  description: string;
  readableName: string;
  type: ChatType;
  isGroupChat: boolean;
  createdAt: string;
  updatedAt: string;
  hasUnreadMessages: boolean;
  empty: boolean;
  messagesCount: number;
  lastMessage: Message | null;
  usersLimit: number;
  removed: boolean;
  isActive: boolean;
  isArchive: boolean;
  avatarUrl: File;
}