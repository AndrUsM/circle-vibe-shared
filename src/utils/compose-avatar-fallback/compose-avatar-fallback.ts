import { User } from "src/models";

export const composeAvatarFallback = (user: User) =>
  [user.firstname, user.surname]
    .filter(Boolean)
    .map((line) => line.charAt(0))
    .join("")
    .toUpperCase();
