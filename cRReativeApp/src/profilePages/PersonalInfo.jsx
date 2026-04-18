import ProfileMenu from "../Components/ProfileMenu";
import { useState, useEffect } from "react";
import "../styles/personalInfo.css";
import { Country, City } from "country-state-city";
import { Days } from "../useful/days";
import { Month } from "../useful/month";
import { Year } from "../useful/year";

export default function PersonalInfoWindow() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState(null);
  const [cities, setCities] = useState([]);

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (country) {
      const cityList = City.getCitiesOfCountry(country);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCities(cityList);
      setCity(null);
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
                  city: city?.name,
                  latitude: Number(city?.latitude),
                  longitude: Number(city?.longitude),
                  year: year ? Number(year) : null,
                  month: month ? Number(month) : null,
                  day: day ? Number(day) : null,
                  hour: hour !== "" ? Number(hour) : null,
                  minute: minute !== "" ? Number(minute) : null,
                }),
              },
            );

            const data = await res.json();

            if (res.ok) {
              setMessage(
                `Personal info updated successfully! Your zodiac sign is ${data.user.zodiacSign} and your ascendant is ${data.user.ascendantSign}.`,
              );
            } else {
              setMessage(data.message || "Something went wrong.");
            }

            // Reset form
            setCountry("");
            setCity(null);
            setCities([]);
            setDay("");
            setMonth("");
            setYear("");
            setHour("");
            setMinute("");

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
              <option key={c.isoCode} value={c.isoCode}>
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
            <option>Select city</option>
            {cities.map((ct) => (
              <option
                key={`${ct.name}-${ct.stateCode}-${ct.latitude}`}
                value={ct.name}
              >
                {ct.name}
              </option>
            ))}
          </select>

          <h2>Birth details</h2>

          <label htmlFor="yearOfBirth">Year:</label>
          <select
            name="yearOfBirth "
            id="yearOfBirth"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option>Select year</option>
            <Year />
          </select>

          <label htmlFor="monthOfBirth">Month:</label>
          <select
            name="monthOfBirth"
            id="monthOfBirth"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            <option>Select month</option>
            <Month />
          </select>

          <label htmlFor="dayOfBirth">Day:</label>
          <select
            name="dayOfBirth"
            id="dayOfBirth"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          >
            <option>Select day</option>
            <Days />
          </select>

          <label htmlFor="birthHour">Hour:</label>
          <input
            type="number"
            id="birthHour"
            name="birthMinute"
            min="0"
            max="23"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
            placeholder="0 - 23"
          />

          <label htmlFor="birthMinute">Minute:</label>
          <input
            type="number"
            id="birthMinute"
            name="birthMinute"
            min="0"
            max="59"
            value={minute}
            onChange={(e) => setMinute(e.target.value)}
            placeholder="0 - 59"
          />

          {message && <div className="successMessage">{message}</div>}
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
}
