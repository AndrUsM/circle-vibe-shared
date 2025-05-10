import Cookies from "js-cookie";

export const useCookies = () => {
  const set = (name: string, value: string, days = 7) => {
    Cookies.set(name, value, { expires: days });
  };

  const get = (name: string) => {
    return Cookies.get(name);
  };

  const remove = (name: string) => {
    Cookies.remove(name);
  };

  return {
    set,
    get,
    remove,
  };
};
