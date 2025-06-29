import { MessageStatus, MessageType } from "src/enums";
import { MessageFile } from "./file";
import { User } from "./user";
import { Thread } from "./thread";
import { ChatParticipant } from "./chat-participant";

export interface Message {
  id: number;
  content: string;
  files: MessageFile[];
  status: MessageStatus;
  chatId: number;
  senderId: number;
  createdAt: Date;
  updatedAt: Date;
  messageType: MessageType;
  threadId: number;
  removed: boolean;
  hidden: boolean;
  sender: ChatParticipant;
  thread?: Thread;
  isSavedMessages?: boolean;
}
