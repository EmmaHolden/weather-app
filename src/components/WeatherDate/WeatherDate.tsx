interface WeatherDateProps {
  rawDate: any;
  variant: string;
}
const WeatherDate = ({ rawDate, variant }: WeatherDateProps) => {
  return (
    <>
      {variant === "day-time" ? (
        <p>
          {new Date(rawDate).toLocaleDateString("en-GB", {
            weekday: "short",
          })}{" "}
          {new Date(rawDate)
            .toLocaleTimeString("en-GB", {
              hour: "numeric",
              hour12: true,
            })
            .replace(" ", "")}
        </p>
      ) : null}
      {variant === "hour-minute" ? (
        <p>
          {new Date(rawDate).toLocaleTimeString("en-GB", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      ) : null}
    </>
  );
};

export default WeatherDate;
