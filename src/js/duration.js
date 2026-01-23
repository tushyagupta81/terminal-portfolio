function diffHuman(start, end = new Date()) {
  if (!start) return null;

  // Ensure Date objects
  start = new Date(start);
  end = new Date(end);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  // If days negative → month not reached → count as previous month
  if (days < 0) {
    months -= 1;

    // Add days in previous month to days for rounding logic
    const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0).getDate();
    days = prevMonth + days;
  }

  // Normalize negative months
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Round months based on days
  if (days >= 15) {
    months += 1;
  }

  // If rounding pushes months to 12 → convert to 1 year
  if (months === 12) {
    years += 1;
    months = 0;
  }

  // Formatting rules
  if (years > 0 && months > 0)
    return `${years} ${years > 1 ? "years" : "year"} ${months} ${months > 1 ? "months" : "month"}`;
  if (years > 0) return `${years} ${years > 1 ? "years" : "year"}`;
  return `${months} ${months > 1 ? "months" : "month"}`;
}

export default diffHuman;
