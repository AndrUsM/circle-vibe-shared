export const encryptContentToBase64 = (messageContent: string): string => {
  return Buffer.from(messageContent, 'utf8').toString('base64');
};