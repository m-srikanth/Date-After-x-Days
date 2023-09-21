const a = require("date-fns/addDays");
const add = (days) => {
  let date = a(new Date(2020, 7, 22), days);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};
module.exports = add;
