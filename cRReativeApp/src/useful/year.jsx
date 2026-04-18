export function Year() {
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 100;
  const yearsArray = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => startYear + i,
  );

  return (
    <>
      {yearsArray.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </>
  );
}
