import { UserType } from "src/enums";
import { File } from "./file";

export interface User {
  _id: string;
  username: string;
  surname: string;
  birthDate?: Date;
  password: string;
  avatar?: File;
  isHiddenContactInfo: boolean;
  country?: string | null;
  city?: string;
  email: string;
  privateKey: string;
  privateToken: string;
  primaryPhone?: string | null;
  type: UserType;
}
