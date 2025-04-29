export interface Admin {
  _id: string;
  username: string;
  surname: string;
  password: string;
  avatarUrl: string;
  isPublic: boolean;
  address: string;
  city: string;
  privateToken: string;
  country: string;
  email: string;
  primaryPhone: string;
}