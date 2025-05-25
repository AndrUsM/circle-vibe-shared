import { ChatParticipant } from "./chat-participant";
import { Thread } from "./thread";

export interface ThreadParticipant {
  id: number;
  userId: number;
  threadId: number;

  user: ChatParticipant;
  thread: Thread;
}