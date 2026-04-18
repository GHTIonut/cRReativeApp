export function Days() {
  const daysArray = Array.from({ length: 31 }, (_, i) => i + 1); // _ pentru parametru nefolosit
  return (
    <>
      {daysArray.map((day) => (
        <option key={day} value={day}>
          {day}
        </option>
      ))}
    </>
  );
}
