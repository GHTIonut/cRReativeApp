import "../styles/sideBar.css";

export default function SideBar() {
  return (
    <div>
      <select name="Zodiac" className="zodiacMenu">
        <option value="">Select your zodiac sign</option>
        <option value="">Aries</option>
        <option value="">Taurus</option>
        <option value="">Gemini</option>
        <option value="">Cancer</option>
        <option value="">Leo</option>
        <option value="">Virgo</option>
        <option value="">Scorpio</option>
        <option value="">Sagittarius</option>
        <option value="">Capricorn</option>
        <option value="">Aquarius</option>
        <option value="">Pisces</option>
      </select>
    </div>
  );
}
