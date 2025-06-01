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
  username: string;
  surname: string;
  birthDate: Date;
  password: string;
  passwordConfirmation: string;
  isHiddenContactInfo: boolean;
  city: string;
  country: string;
  email: string;
  primaryPhone?: string;
  type: UserType;
  role: UserRole;
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
