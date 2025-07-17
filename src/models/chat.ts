import { ChatType } from "src/enums";
import { User } from "./user";
import { Message } from "./message";

export interface Chat {
  id: number;
  avatarUrl?: string;
  hidden: boolean;
  isActive: boolean;
  isSavedMessages?: boolean;
  name: string;
  readableName: string;
  description?: string;
  type: ChatType;
  isGroupChat: boolean;
  createdAt: Date;
  updatedAt: Date;
  hasUnreadMessages?: boolean;
  empty?: boolean;
  unreadMessagesCount: number;
  usersLimit: number;
  removed: boolean;
  lastMessageId: number;
  lastMessage: Message;
  encryptionSecret: string;
}
