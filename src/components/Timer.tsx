import useCountdown from "../hooks/useCountdown";

export default function Timer({ targetDate }: { targetDate: number }) {
  const { hours, minutes, seconds } = useCountdown(targetDate);
  return (
    <>
      {hours >= 0 ? hours : 0}h {minutes >= 0 ? minutes : 0}m {seconds >= 0 ? seconds : 0}s
    </>
  );
}
