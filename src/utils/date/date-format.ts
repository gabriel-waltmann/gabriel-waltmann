export const BRInputToBR = (dateStr: string): string => {
  let formatedDate = dateStr   
    .replace(/[^0-9]/g, ""); // remove all characters that are not a number
  
  const day = formatedDate.slice(0, 2);
  const month = formatedDate.slice(2, 4);
  const year = formatedDate.slice(4, 8);

  if (day) formatedDate = `${day}/`;

  if (month) formatedDate += `${month}/`;

  if (year) formatedDate += year;

  return formatedDate;
}

// dateStr: DD/MM/YYYY, timeStr: HH:MM:SS => YYYY-MM-DDTHH:MM:SS
export const BRToISO = (dateStr: string, timeStr: string): Date => {
  let formatedDate = dateStr   
    .replace(/[^0-9]/g, ""); // remove all characters that are not a number

  const day = formatedDate.slice(0, 2);
  const month = formatedDate.slice(2, 4);
  const year = formatedDate.slice(4, 8);

  const hour = timeStr.slice(0, 2);
  const minute = timeStr.slice(3, 5);
  const second = timeStr.slice(6, 8);

  const date = new Date();

  date.setFullYear(+year);
  date.setMonth(+month - 1);
  date.setDate(+day);

  date.setHours(+hour);
  date.setMinutes(+minute);
  date.setSeconds(+second);

  return date;
}

// isoStr: YYYY-MM-DDTHH:MM:SS => DD/MM/YYYY HH:MM:SS
export const ISOToBR = (isoStr: string): string => {
  const date = new Date(isoStr);

  const dateConfig: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  return date.toLocaleDateString("pt-BR", dateConfig);
}