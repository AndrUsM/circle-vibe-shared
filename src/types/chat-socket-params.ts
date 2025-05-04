import { Chat, Message } from 'src/models';

export interface RefreshChatsSocketParams {
  chatId: string;
}
export type JoinChatSocketParams = Chat;
export type CreateChatSocketParams = Chat;
export interface SendMessageSocketParams {
  chat: Chat;
  message: Message;
}
