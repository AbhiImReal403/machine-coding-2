export const getFullName = ({ fname, lname }) => {
  return `${
    fname ? fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase() : ""
  } ${
    lname ? lname.charAt(0).toUpperCase() + lname.slice(1).toLowerCase() : ""
  }`;
};
