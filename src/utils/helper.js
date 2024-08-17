export const getFullName = ({ fname, lname }) => {
  return `${
    fname ? fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase() : ""
  } ${
    lname ? lname.charAt(0).toUpperCase() + lname.slice(1).toLowerCase() : ""
  }`;
};

export const randomInsightGen = () => {
  const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  // const getRandomDate = () => {
  //   const start = new Date(2023, 0, 1); // Start date (Jan 1, 2023)
  //   const end = new Date(); // Current date
  //   const randomDate = new Date(
  //     start.getTime() + Math.random() * (end.getTime() - start.getTime())
  //   );
  //   return randomDate.toLocaleDateString();
  // };

  const getRandomDate = () => {
    const start = new Date(2023, 0, 1); // Start date (Jan 1, 2023)
    const end = new Date(); // Current date
    const randomDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );

    // Format the date as "Jul 30, 2024"
    return randomDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getRandomTime = () => {
    const hours = String(getRandomInt(1, 12)).padStart(2, "0");
    const minutes = String(getRandomInt(0, 59)).padStart(2, "0");
    const period = getRandomInt(0, 1) === 0 ? "AM" : "PM";
    return `${hours}:${minutes} ${period}`;
  };
  const formatCount = (count) => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + "K";
    }
    return count.toString();
  };

  const getRandomCount = () => {
    const count = getRandomInt(10000, 50000); // You can adjust the range if needed
    return formatCount(count);
  };

  return {
    date: getRandomDate(),
    time: getRandomTime(),
    views: getRandomCount(),
    comments: getRandomCount(),
    retweets: getRandomCount(),
    likes: getRandomCount(),
    saves: getRandomCount(),
  };
};


