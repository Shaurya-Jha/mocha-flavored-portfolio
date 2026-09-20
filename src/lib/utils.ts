export function calculateDuration(
  startDate: Date,
  endDate: Date | "present"
): number {
  const actualEndDate = endDate === "present" ? new Date() : endDate;

  if (startDate > actualEndDate) {
    throw new Error("Start date must be before end date.");
  }

  // Calculate the total duration in months
  let totalMonths =
    (actualEndDate.getFullYear() - startDate.getFullYear()) * 12 +
    (actualEndDate.getMonth() - startDate.getMonth());

  // Adjust for days if the end date's day is earlier than the start date's day
  if (actualEndDate.getDate() < startDate.getDate()) {
    totalMonths--;
  }

  return totalMonths;
}