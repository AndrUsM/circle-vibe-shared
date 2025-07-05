export interface ChatInvite {
  id: number;
  chatId: number;
  fromChatParticipantId: number;
  targetUserId: number;
  expirationDate: Date;
  token: string;
}
