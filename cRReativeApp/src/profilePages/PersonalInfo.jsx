import ProfileMenu from "../Components/ProfileMenu";
import { useState, useEffect } from "react";
import "../styles/personalInfo.css";
import { Country, City } from "country-state-city";

export default function PersonalInfoWindow() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const [birthDate, setBirthDate] = useState("");
  const [birthHour, setBirthHour] = useState("");
  const [birthMinute, setBirthMinute] = useState("");
  const [birthSecond, setBirthSecond] = useState("");
  const [message, setMessage] = useState("");

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
      <ProfileMenu />

      <div className="personalInfoContainer">
        <h1>Update your personal info</h1>
        <form
          className="updatePersonalInfo"
          onSubmit={async (e) => {
            e.preventDefault();

            const token = localStorage.getItem("token");

            const res = await fetch(
              "http://localhost:3000/updatePersonalInfo",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                  country,
                  city: city?.name || "",
                  latitude: city?.latitude || "",
                  longitude: city?.longitude || "",
                  birthDate,
                  birthHour,
                  birthMinute,
                  birthSecond,
                }),
              },
            );
            const data = await res.json();
            if (res.ok) {
              setMessage("Personal info updated succesfully");
            } else {
              setMessage(data.message || "Something went wrong.");
            }
            setCountry("");
            setCity(null);
            setCities([]);
            setBirthDate("");
            setBirthHour("");
            setBirthMinute("");
            setBirthSecond("");
            setTimeout(() => setMessage(""), 5000);
          }}
        >
          <label htmlFor="placeOfBirth">Place of birth:</label>
          <select
            name="placeOfBirth"
            id="placeOfBirth"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select country</option>
            {countries.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <label htmlFor="cityOfBirth">City of birth:</label>
          <select
            name="cityOfBirth"
            id="cityOfBirth"
            value={city?.name || ""}
            onChange={(e) => {
              const selected = cities.find((c) => c.name === e.target.value);
              setCity(selected);
            }}
            disabled={!country}
          >
            <option value="">Select city</option>
            {cities.map((ct) => (
              <option
                key={`${ct.name}-${ct.stateCode}-${ct.latitude}`}
                value={ct.name}
              >
                {ct.name}
              </option>
            ))}
          </select>

          <label htmlFor="birthDate">Birth date</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <label htmlFor="birthHour">Birth hour:</label>
          <input
            type="number"
            id="birthHour"
            name="birthMinute"
            min="0"
            max="23"
            value={birthHour}
            onChange={(e) => setBirthHour(e.target.value)}
            placeholder="0 - 23"
          />

          <label htmlFor="birthMinute">Birth minute:</label>
          <input
            type="number"
            id="birthMinute"
            name="birthMinute"
            min="0"
            max="59"
            value={birthMinute}
            onChange={(e) => setBirthMinute(e.target.value)}
            placeholder="0 - 59"
          />

          <label htmlFor="birthSecond">Birth second:</label>
          <input
            type="number"
            id="birthSecond"
            name="birthSecond"
            min="0"
            max="59"
            value={birthSecond}
            onChange={(e) => setBirthSecond(e.target.value)}
            placeholder="0 - 59"
          />

          {message && <div className="successMessage">{message}</div>}
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
}
