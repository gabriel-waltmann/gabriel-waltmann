export const calcAge = (birthDate: Date): number => {
  const today = new Date();
  const birthDay = new Date(birthDate);
  let age = today.getFullYear() - birthDay.getFullYear();
  const month = today.getMonth() - birthDay.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birthDay.getDate())) {
    age--;
  }
  return age;
};
