export const BRInputToBR = (timeStr: string, withSeconds?: boolean): string => {
  let formatedTime = timeStr   
    .replace(/[^0-9]/g, ""); // remove all characters that are not a number
  
  const hh = formatedTime.slice(0, 2);
  const mm = formatedTime.slice(2, 4);
  const ss = formatedTime.slice(4, 6);

  if (hh) formatedTime = `${hh}:`;

  if (mm) formatedTime += `${mm}`;

  if (withSeconds) {
    formatedTime += ":";

    if (ss) formatedTime += `${ss}`;
  }

  
  return formatedTime;
}