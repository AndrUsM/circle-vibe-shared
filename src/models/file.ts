import { MessageFileEntityType, MessageFileType } from "src/enums";

export interface MessageFile {
  id: number;
  fileName: string;
  description: string;
  url: string;
  type: MessageFileType;
  entityType: MessageFileEntityType;
}
