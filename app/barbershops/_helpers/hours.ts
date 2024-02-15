import { setHours, setMinutes, format, addMinutes } from "date-fns";

export function generateDayTimeList(date: Date): string[] {
  const startTime = setMinutes(setHours(date, 9), 0); // vai iniciar de 09:00
  const endTime = setMinutes(setHours(date, 22), 30); // vai terminar de 22:30
  const interval = 45; // intervalo de tempo
  const timeList: string[] = [];

  let currentTime = startTime;

  while (currentTime <= endTime) {
    timeList.push(format(currentTime, "HH:mm"));
    currentTime = addMinutes(currentTime, interval);
  }

  return timeList;
}