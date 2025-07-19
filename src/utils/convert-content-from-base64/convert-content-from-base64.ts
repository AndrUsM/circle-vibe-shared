export const convertContentFromBase64 = (encodedMessage: string): string => {
  return Buffer.from(encodedMessage, 'base64').toString('utf8');
};
