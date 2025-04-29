import { File } from "./file";

export interface User {
  _id: string;
  username: string;
  surname: string;
  birthDate: Date;
  password: string;
  avatar?: File;
  isHiddenContactInfo: boolean;
  address?: string | null;
  city?: string | null;
  zipCode?: string | null;
  country?: string | null;
  phones?: string[] | null;
  email: string;
  privateToken: string;
  secret: boolean;
  primaryPhone?: string | null;
}
