import ProfileMenu from "../Components/ProfileMenu";
import { useState, useEffect } from "react";
import "../styles/personalInfo.css";
import { Country, City } from "country-state-city";

export default function PersonalInfoWindow() {
  const [sign, setSign] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (country) {
      const cityList = City.getCitiesOfCountry(country);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCities(cityList);
      setCity("");
    }
  }, [country]);

  const countries = Country.getAllCountries();

  return (
    <>
      <div className="profileMenu">
        <ProfileMenu />
      </div>
      <div className="personalInfoContainer">
        <form action="" className="updatePersonalInfo">
          <label htmlFor="zodiacSign"></label>
          <select
            name="zodiacSign"
            id="zodiacSign"
            value={sign}
            onChange={(e) => setSign(e.target.value)}
          >
            <option value="Aries">Aries</option>
            <option value="Taurus">Taurus</option>
            <option value="Gemini">Gemini</option>
            <option value="Cancer">Cancer</option>
            <option value="Leo">Leo</option>
            <option value="Virgo">Virgo</option>
            <option value="Libra">Libra</option>
            <option value="Scorpio">Scorpio</option>
            <option value="Sagittarius">Sagittarius</option>
            <option value="Capricorn">Capricorn</option>
            <option value="Aquarius">Aquarius</option>
            <option value="Pisces">Pisces</option>
          </select>

          <label htmlFor="placeOfBirth">Place of birth:</label>
          <select
            name="placeOfBirth"
            id="placeOfBirth"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select country</option>
            {countries.map((c) => (
              <option key={c.isoCode} value={c.isoCode}>
                {c.name}
              </option>
            ))}
          </select>
          <label htmlFor="cityOfBirth">City of birth:</label>
          <select
            name="cityOfBirth"
            id="cityOfBirth"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            disabled={!country}
          >
            <option value="">Select city</option>
            {cities.map((ct) => (
              <option key={ct.name} value={ct.name}>
                {ct.name}
              </option>
            ))}
          </select>
        </form>
      </div>
    </>
  );
}
