export const getDayTime = (rawDate: number) => {
  const date = new Date(rawDate).toLocaleDateString("en-GB", {
    weekday: "short",
  });
  const time = new Date(rawDate)
    .toLocaleTimeString("en-GB", {
      hour: "numeric",
      hour12: true,
    })
    .replace(" ", "");
  return `${date} ${time}`;
};

export const getHourMinute = (rawDate: number) => {
  return new Date(rawDate).toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};
