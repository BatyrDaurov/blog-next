import { MONTHS } from '../modules/categories-list/constants/Months';

const getFormatDate = (rawDate: Date) => {
  const date = new Date(rawDate);
  let formatedMinutes = String(date.getMinutes());
  let formatedHours = String(date.getHours());
  let formatedMonth = MONTHS[date.getMonth()];

  //   Formatting Time
  if (date.getMinutes() <= 9) {
    formatedMinutes = `0${date.getMinutes()}`;
  }
  if (date.getHours() <= 9) {
    formatedHours = `0${date.getMinutes()}`;
  }
  //   Formatting Months

  return `${formatedMonth} - ${formatedHours}:${formatedMinutes}`;
};
export default getFormatDate;
