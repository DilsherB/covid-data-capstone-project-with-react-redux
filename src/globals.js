const DateComponent = (timestamp) => {
  const date = new Date(timestamp).toLocaleString("en-US", {
    // This will remove the time from the date string.
    timeZone: "UTC",
    hour12: false,
    minute: "2-digit",
    hour: "2-digit",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return date;
};

export default DateComponent;
