export const convertContentToBase64 = (messageContent: string): string => {
  return Buffer.from(messageContent, 'utf8').toString('base64');
};