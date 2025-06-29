export interface FileVideoSocketConnectionAuthParams {
  token: string;
}

export interface FileVideoSocketStartUploadParams {
  fileName: string;
}

export type FileVideoSocketErrorOutput = string;

export interface FileVideoSocketSuccessOutput {
  filePath: string;
}