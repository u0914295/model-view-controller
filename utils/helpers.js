module.exports = {
    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
    truncate: (str, len) => {
      if (str.length > len) {
        const newStr = str.slice(0, len);
        return newStr;
      }
      return str;
    },
  };