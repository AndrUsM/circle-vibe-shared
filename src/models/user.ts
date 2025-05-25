import { UserChatRole, UserRole, UserType } from "src/enums";

export interface User {
  id: number;
  username: string;
  surname: string;
  birthDate: Date;
  password: string;
  avatarUrl: string;
  isHiddenContactInfo: boolean;
  country: string;
  city: string;
  email: string;
  privateKey: string;
  privateToken: string;
  primaryPhone: string;
  type: UserType;
  role: UserRole;
  chatRole: UserChatRole;
  createdAt: Date;
  updatedAt: Date;
}
