import { MessageFileEntityType } from "src/enums";

export interface FileSocketConnectionAuthParams {
  token: string;
}

export interface FileSocketStartUploadParams {
  fileName: string;
  type: MessageFileEntityType;
}

export type FileSocketErrorOutput = string;

export interface FileSocketSuccessOutput {
  filePath: string;
}