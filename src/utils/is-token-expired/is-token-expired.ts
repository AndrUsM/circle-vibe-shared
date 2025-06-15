export const isTokenExpired = (exp: number): boolean => {
  const nowInSeconds = Math.floor(Date.now() / 1000);

  return exp < nowInSeconds;
};