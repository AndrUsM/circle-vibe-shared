import { ChatType, MessageFileEntityType, MessageFileType, MessageType, UserRole, UserType } from 'src/enums';
import { Chat, Message } from 'src/models';

export interface RefreshChatsSocketParams {
  chatId: number;
  cursor?: number;
  sortBy?: string;
  sortDirection?: '';
}

// @RoomName
export type RefreshMessagesSocketParams = string;

export interface RequestChatsWithPaginationChatSocketParams {
  page: number;
  pageSize: number;
  removed?: boolean;
  name?: string;
  readableName?: string;
  type?: ChatType;
}

export interface RequestMessagesWithPaginationChatSocketParams {
  page: number;
  pageSize: number;
  chatId: number[];
  content?: string;
  senderId?: number;
}

export interface RequestChatParticipantsWithPagniationSocketParams {
  page: number;
  pageSize: number;
  chatId: number;
  username?: string;
  fullUserName?: string;
}

export interface SendFileMessageChatSocketParams {
  content: string;
  chatId: number;
  senderId: number;
  threadId?: number;
  hidden: boolean;
  messageType: MessageType;
  fileUrl: string;
  optimizedUrl: string;
  fileMeta: SendFileMessageMetaInput;
}

export type JoinChatSocketParams = {
  chatId: number;
  cursor?: number;
  limit?: number;
};

export type CreateChatSocketParams = {
  hidden: boolean;
  name: string;
  description: string;
  type: ChatType;
  usersLimit?: number;
};

export interface SendMessageChatSocketParams {
  content: string;
  chatId: number;
  senderId: number;
  threadId?: number;
  hidden: boolean;
  messageType: MessageType;
}

export interface SendFileMessagePartChatSocketParams {
  content: string;
  chatId: number;
  senderId: number;
  threadId?: number;
  hidden: boolean;
  messageType: MessageType;
  fileMeta: SendFileMessageMetaInput;
}

// export interface ChatsFilter {
//   page: number;
//   limit: number;

//   userId?: number;
//   readableName?: string;
//   type?: ChatType;
//   isGroupChat?: boolean;
//   updatedAt?: Date;
//   empty?: boolean;
//   name?: string;
//   hidden?: boolean;
// }

export interface SendMessageSocketParams {
  content: string;
  chatId: number;
  senderId: number;
  threadId?: number;
  hidden: boolean;
  messageType: MessageType;
}

export interface SendFileMessageMetaInput {
  fileName: string;
  description?: string;
  type: MessageFileType;
  fileType: string;
  entityType: MessageFileEntityType;
}
