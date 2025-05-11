import { UserType } from "src/enums";
import { File } from "./file";

export interface Admin {
  _id: string;
  username: string;
  surname: string;
  password: string;
  avatar: File;
  city: string;
  country: string;
  privateKey: string;
  privateToken: string;
  email: string;
  primaryPhone: string;
  type: UserType;
}