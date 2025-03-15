export interface User {
  _id: string;
  username: string;
  surname: string;
  birthDate: Date;
  password: string;
  avatarUrl?: string | null;
  isHiddenContactInfo: boolean;
  address?: string | null;
  city?: string | null;
  zipCode?: string | null;
  country?: string | null;
  phones?: string[] | null;
  email: string;
  primaryPhone?: string | null;
}
