import { FileType } from "src/enums";

export interface File {
  fileName: string;
  url: string;
  type: FileType;
  description?: string;
}