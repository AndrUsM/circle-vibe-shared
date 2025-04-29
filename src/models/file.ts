import { FileType } from "src/enums";

export interface File {
  _id: number;
  fileName: string;
  url: string;
  type: FileType;
  description?: string;
}