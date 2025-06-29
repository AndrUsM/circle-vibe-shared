export enum ChatSocketCommand {
  RECEIVE_MESSAGES = "receive_messages",
  AUTH_ERROR = "auth_error",
  REFRESH_CHATS = "refresh_chats",
  SEND_MESSAGE = "send_message",
  JOIN_CHAT = "join_chat",
  CREATE_CHAT = "create_chat",
  SEND_VIDEO_FILE_MESSAGE = 'SEND_VIDEO_FILE_MESSAGE',
  SEND_FILE_MESSAGE = 'SEND_FILE_MESSAGE'
}