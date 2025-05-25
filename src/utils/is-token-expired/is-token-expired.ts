export const isTokenExpired = (exp: number): boolean => {
  return exp < new Date().getTime();
};