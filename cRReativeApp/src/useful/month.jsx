export function Month() {
  const monthsArray = Array.from({ length: 12 }, (_, i) => i + 1);
  return (
    <>
      {monthsArray.map((month) => (
        <option key={month} value={month}>
          {month}
        </option>
      ))}
    </>
  );
}
