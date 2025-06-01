import { ChatType, UserRole, UserType } from 'src/enums';
import { Chat, Message } from 'src/models';


export interface RefreshChatsSocketParams {
  chatId: number;
  cursor?: number;
  sortBy?: string;
  sortDirection?: ''
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
  chatId: number;
  message: Message;
}
