interface UserFullName {
  firstname: string;
  surname: string;
}

export const getUserFullName = (user?: UserFullName) => {
  if (!user) {
    return '';
  }

  const { firstname, surname } = user;

  return [firstname, surname].filter(Boolean).join(" ");
}
