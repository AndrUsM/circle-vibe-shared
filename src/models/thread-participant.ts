import { Thread } from "./thread";
import { User } from "./user";

export interface ThreadParticipant {
  id: number;
  userId: number;
  threadId: number;

  user: User;
  thread: Thread;
}