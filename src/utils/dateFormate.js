const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const formateDate = (date) => {
  let month = months[parseInt(date.split("-")[1]) - 1];
  let day = parseInt(date.split("-")[2]);

  return `${month} ${day}`;
};

export { formateDate };
