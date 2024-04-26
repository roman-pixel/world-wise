export function formatDate(date) {
  if (date) {
    const formatDateValue = new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));

    return formatDateValue;
  } else {
    return null;
  }
}
