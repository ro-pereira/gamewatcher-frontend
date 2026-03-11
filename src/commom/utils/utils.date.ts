import { TFormattedDate } from "@/src/components/Types/type";

export const formatDate = (isoDate: string | Date): TFormattedDate => {
  const dateObj = new Date(isoDate);

  const weekday = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
  }).format(dateObj);

  const date = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(dateObj);

  const hours = dateObj.getHours().toString().padStart(2, "0");
  const minutes = dateObj.getMinutes().toString().padStart(2, "0");

  const time = `${hours}H${minutes}`;

  return {
    weekday,
    date,
    time,
  };
};
