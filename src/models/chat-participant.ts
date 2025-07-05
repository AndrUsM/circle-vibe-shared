import { UserChatRole } from "src/enums";
import { Chat } from "./chat";
import { User } from "./user";

export interface ChatParticipant {
  id: number;
  isMuted: boolean;
  userId: number;
  chatId: number;
  user: User;
  chat: Chat;
  chatRole: UserChatRole;
}
