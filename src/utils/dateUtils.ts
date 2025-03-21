import { TIMEZONE_OFFSET_MULTIPLIER } from "../types/global";

export const getDayTime = (rawDate: number, offset: number) => {
  const sum = (rawDate + offset) * TIMEZONE_OFFSET_MULTIPLIER;
  const date = new Date(sum).toLocaleDateString("en-GB", {
    weekday: "short",
  });
  const time = new Date(sum)
    .toLocaleTimeString("en-GB", {
      hour: "numeric",
      hour12: true,
    })
    .replace(" ", "");
  return `${date} ${time}`;
};

export const getHourMinute = (rawDate: number, offset: number) => {
  const sum = (rawDate + offset) * TIMEZONE_OFFSET_MULTIPLIER;
  return new Date(sum).toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export const getShortDay = (rawDate: number, offset: number) => {
  const sum = (rawDate + offset) * TIMEZONE_OFFSET_MULTIPLIER;
  return new Date(sum).toLocaleDateString("en-GB", {
    weekday: "short",
  });
};

export const getLongDate = (rawDate: number, offset: number) => {
  const sum = (rawDate + offset) * TIMEZONE_OFFSET_MULTIPLIER;
  return new Date(sum).toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatLocalTime = (date: Date) => {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

export const getLocalHour = (rawDate: number, offset: number) => {
  return new Date(
    (rawDate + offset) * TIMEZONE_OFFSET_MULTIPLIER
  ).getUTCHours();
};
