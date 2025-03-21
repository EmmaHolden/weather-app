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

export const getShortDay = (rawDate: number) => {
  return new Date(rawDate).toLocaleDateString("en-GB", {
    weekday: "short",
  });
};

export const getLongDate = (rawDate: number) => {
  return new Date(rawDate).toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getTodayLongDate = () => {
  return new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
