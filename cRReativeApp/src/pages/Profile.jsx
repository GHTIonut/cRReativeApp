import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import ProfileMenu from "../Components/ProfileMenu.jsx";
import "../styles/profile.css";

export function Profile() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [personalInfo, setPersonalInfo] = useState(null);
  if (!user) {
    navigate("/Login");
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    async function getPersonalData() {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:3000/getPersonalInfo", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setPersonalInfo({
        ...data.personalInfo,
        zodiacSign: data.zodiacSign,
        ascendantSign: data.ascendantSign,
      });
    }
    getPersonalData();
  }, []);

  return (
    <>
      <div className="profilePage">
        <h1>Your cosmic space awaits, {user.username}</h1>
        {personalInfo && (
          <div className="personalInfoDisplay">
            <h2>Your personal info</h2>
            <p>
              <strong>Country:</strong>{" "}
              {personalInfo.country === "AF" ? "Afghanistan" : null}
              {personalInfo.country === "AL" ? "Albania" : null}
              {personalInfo.country === "DZ" ? "Algeria" : null}
              {personalInfo.country === "AD" ? "Andorra" : null}
              {personalInfo.country === "AO" ? "Angola" : null}
              {personalInfo.country === "AG" ? "Antigua and Barbuda" : null}
              {personalInfo.country === "AR" ? "Argentina" : null}
              {personalInfo.country === "AM" ? "Armenia" : null}
              {personalInfo.country === "AU" ? "Australia" : null}
              {personalInfo.country === "AT" ? "Austria" : null}
              {personalInfo.country === "AZ" ? "Azerbaijan" : null}
              {personalInfo.country === "BH" ? "Bahrain" : null}
              {personalInfo.country === "BD" ? "Bangladesh" : null}
              {personalInfo.country === "BB" ? "Barbados" : null}
              {personalInfo.country === "BY" ? "Belarus" : null}
              {personalInfo.country === "BE" ? "Belgium" : null}
              {personalInfo.country === "BZ" ? "Belize" : null}
              {personalInfo.country === "BJ" ? "Benin" : null}
              {personalInfo.country === "BM" ? "Bermuda" : null}
              {personalInfo.country === "BT" ? "Bhutan" : null}
              {personalInfo.country === "BO" ? "Bolivia" : null}
              {personalInfo.country === "BA" ? "Bosnia and Herzegovina" : null}
              {personalInfo.country === "BW" ? "Botswana" : null}
              {personalInfo.country === "BR" ? "Brazil" : null}
              {personalInfo.country === "BN" ? "Brunei" : null}
              {personalInfo.country === "BG" ? "Bulgaria" : null}
              {personalInfo.country === "BF" ? "Burkina Faso" : null}
              {personalInfo.country === "BI" ? "Burundi" : null}
              {personalInfo.country === "KH" ? "Cambodia" : null}
              {personalInfo.country === "CM" ? "Cameroon" : null}
              {personalInfo.country === "CA" ? "Canada" : null}
              {personalInfo.country === "CV" ? "Cape Verde" : null}
              {personalInfo.country === "CF"
                ? "Central African Republic"
                : null}
              {personalInfo.country === "TD" ? "Chad" : null}
              {personalInfo.country === "CL" ? "Chile" : null}
              {personalInfo.country === "CN" ? "China" : null}
              {personalInfo.country === "CO" ? "Colombia" : null}
              {personalInfo.country === "KM" ? "Comoros" : null}
              {personalInfo.country === "CG" ? "Congo" : null}
              {personalInfo.country === "CR" ? "Costa Rica" : null}
              {personalInfo.country === "CI"
                ? "Cote D'Ivoire (Ivory Coast)"
                : null}
              {personalInfo.country === "HR" ? "Croatia" : null}
              {personalInfo.country === "CU" ? "Cuba" : null}
              {personalInfo.country === "CY" ? "Cyprus" : null}
              {personalInfo.country === "CZ" ? "Czech Republic" : null}
              {personalInfo.country === "CD"
                ? "Democratic Republic of the Congo"
                : null}
              {personalInfo.country === "DK" ? "Denmark" : null}
              {personalInfo.country === "DJ" ? "Djibouti" : null}
              {personalInfo.country === "DM" ? "Dominica" : null}
              {personalInfo.country === "DO" ? "Dominican Republic" : null}
              {personalInfo.country === "TL" ? "East Timor" : null}
              {personalInfo.country === "EC" ? "Ecuador" : null}
              {personalInfo.country === "EG" ? "Egypt" : null}
              {personalInfo.country === "SV" ? "El Salvador" : null}
              {personalInfo.country === "GQ" ? "Equatorial Guinea" : null}
              {personalInfo.country === "ER" ? "Eritrea" : null}
              {personalInfo.country === "EE" ? "Estonia" : null}
              {personalInfo.country === "ET" ? "Ethiopia" : null}
              {personalInfo.country === "FJ" ? "Fiji Islands" : null}
              {personalInfo.country === "FI" ? "Finland" : null}
              {personalInfo.country === "FR" ? "France" : null}
              {personalInfo.country === "GA" ? "Gabon" : null}
              {personalInfo.country === "GE" ? "Georgia" : null}
              {personalInfo.country === "DE" ? "Germany" : null}
              {personalInfo.country === "GH" ? "Ghana" : null}
              {personalInfo.country === "GR" ? "Greece" : null}
              {personalInfo.country === "GD" ? "Grenada" : null}
              {personalInfo.country === "GT" ? "Guatemala" : null}
              {personalInfo.country === "GN" ? "Guinea" : null}
              {personalInfo.country === "GW" ? "Guinea-Bissau" : null}
              {personalInfo.country === "GY" ? "Guyana" : null}
              {personalInfo.country === "HT" ? "Haiti" : null}
              {personalInfo.country === "HN" ? "Honduras" : null}
              {personalInfo.country === "HK" ? "Hong Kong S.A.R." : null}
              {personalInfo.country === "HU" ? "Hungary" : null}
              {personalInfo.country === "IS" ? "Iceland" : null}
              {personalInfo.country === "IN" ? "India" : null}
              {personalInfo.country === "ID" ? "Indonesia" : null}
              {personalInfo.country === "IR" ? "Iran" : null}
              {personalInfo.country === "IQ" ? "Iraq" : null}
              {personalInfo.country === "IE" ? "Ireland" : null}
              {personalInfo.country === "IL" ? "Israel" : null}
              {personalInfo.country === "IT" ? "Italy" : null}
              {personalInfo.country === "JM" ? "Jamaica" : null}
              {personalInfo.country === "JP" ? "Japan" : null}
              {personalInfo.country === "JO" ? "Jordan" : null}
              {personalInfo.country === "KZ" ? "Kazakhstan" : null}
              {personalInfo.country === "KE" ? "Kenya" : null}
              {personalInfo.country === "KI" ? "Kiribati" : null}
              {personalInfo.country === "XK" ? "Kosovo" : null}
              {personalInfo.country === "KW" ? "Kuwait" : null}
              {personalInfo.country === "KG" ? "Kyrgyzstan" : null}
              {personalInfo.country === "LA" ? "Laos" : null}
              {personalInfo.country === "LV" ? "Latvia" : null}
              {personalInfo.country === "LB" ? "Lebanon" : null}
              {personalInfo.country === "LS" ? "Lesotho" : null}
              {personalInfo.country === "LR" ? "Liberia" : null}
              {personalInfo.country === "LY" ? "Libya" : null}
              {personalInfo.country === "LI" ? "Liechtenstein" : null}
              {personalInfo.country === "LT" ? "Lithuania" : null}
              {personalInfo.country === "LU" ? "Luxembourg" : null}
              {personalInfo.country === "MK" ? "Macedonia" : null}
              {personalInfo.country === "MG" ? "Madagascar" : null}
              {personalInfo.country === "MW" ? "Malawi" : null}
              {personalInfo.country === "MY" ? "Malaysia" : null}
              {personalInfo.country === "MV" ? "Maldives" : null}
              {personalInfo.country === "ML" ? "Mali" : null}
              {personalInfo.country === "MT" ? "Malta" : null}
              {personalInfo.country === "MH" ? "Marshall Islands" : null}
              {personalInfo.country === "MR" ? "Mauritania" : null}
              {personalInfo.country === "MU" ? "Mauritius" : null}
              {personalInfo.country === "MX" ? "Mexico" : null}
              {personalInfo.country === "FM" ? "Micronesia" : null}
              {personalInfo.country === "MD" ? "Moldova" : null}
              {personalInfo.country === "MC" ? "Monaco" : null}
              {personalInfo.country === "MN" ? "Mongolia" : null}
              {personalInfo.country === "ME" ? "Montenegro" : null}
              {personalInfo.country === "MA" ? "Morocco" : null}
              {personalInfo.country === "MZ" ? "Mozambique" : null}
              {personalInfo.country === "MM" ? "Myanmar" : null}
              {personalInfo.country === "NA" ? "Namibia" : null}
              {personalInfo.country === "NR" ? "Nauru" : null}
              {personalInfo.country === "NP" ? "Nepal" : null}
              {personalInfo.country === "NL" ? "Netherlands" : null}
              {personalInfo.country === "NZ" ? "New Zealand" : null}
              {personalInfo.country === "NI" ? "Nicaragua" : null}
              {personalInfo.country === "NE" ? "Niger" : null}
              {personalInfo.country === "NG" ? "Nigeria" : null}
              {personalInfo.country === "KP" ? "North Korea" : null}
              {personalInfo.country === "NO" ? "Norway" : null}
              {personalInfo.country === "OM" ? "Oman" : null}
              {personalInfo.country === "PK" ? "Pakistan" : null}
              {personalInfo.country === "PW" ? "Palau" : null}
              {personalInfo.country === "PA" ? "Panama" : null}
              {personalInfo.country === "PG" ? "Papua New Guinea" : null}
              {personalInfo.country === "PY" ? "Paraguay" : null}
              {personalInfo.country === "PE" ? "Peru" : null}
              {personalInfo.country === "PH" ? "Philippines" : null}
              {personalInfo.country === "PL" ? "Poland" : null}
              {personalInfo.country === "PT" ? "Portugal" : null}
              {personalInfo.country === "QA" ? "Qatar" : null}
              {personalInfo.country === "RO" ? "Romania" : null}
              {personalInfo.country === "RU" ? "Russia" : null}
              {personalInfo.country === "RW" ? "Rwanda" : null}
              {personalInfo.country === "KN" ? "Saint Kitts and Nevis" : null}
              {personalInfo.country === "LC" ? "Saint Lucia" : null}
              {personalInfo.country === "VC"
                ? "Saint Vincent and the Grenadines"
                : null}
              {personalInfo.country === "WS" ? "Samoa" : null}
              {personalInfo.country === "SM" ? "San Marino" : null}
              {personalInfo.country === "ST" ? "Sao Tome and Principe" : null}
              {personalInfo.country === "SA" ? "Saudi Arabia" : null}
              {personalInfo.country === "SN" ? "Senegal" : null}
              {personalInfo.country === "RS" ? "Serbia" : null}
              {personalInfo.country === "SC" ? "Seychelles" : null}
              {personalInfo.country === "SL" ? "Sierra Leone" : null}
              {personalInfo.country === "SG" ? "Singapore" : null}
              {personalInfo.country === "SK" ? "Slovakia" : null}
              {personalInfo.country === "SI" ? "Slovenia" : null}
              {personalInfo.country === "SB" ? "Solomon Islands" : null}
              {personalInfo.country === "SO" ? "Somalia" : null}
              {personalInfo.country === "ZA" ? "South Africa" : null}
              {personalInfo.country === "KR" ? "South Korea" : null}
              {personalInfo.country === "SS" ? "South Sudan" : null}
              {personalInfo.country === "ES" ? "Spain" : null}
              {personalInfo.country === "LK" ? "Sri Lanka" : null}
              {personalInfo.country === "SD" ? "Sudan" : null}
              {personalInfo.country === "SR" ? "Suriname" : null}
              {personalInfo.country === "SZ" ? "Swaziland" : null}
              {personalInfo.country === "SE" ? "Sweden" : null}
              {personalInfo.country === "CH" ? "Switzerland" : null}
              {personalInfo.country === "SY" ? "Syria" : null}
              {personalInfo.country === "TW" ? "Taiwan" : null}
              {personalInfo.country === "TJ" ? "Tajikistan" : null}
              {personalInfo.country === "TZ" ? "Tanzania" : null}
              {personalInfo.country === "TH" ? "Thailand" : null}
              {personalInfo.country === "BS" ? "The Bahamas" : null}
              {personalInfo.country === "GM" ? "The Gambia" : null}
              {personalInfo.country === "TG" ? "Togo" : null}
              {personalInfo.country === "TO" ? "Tonga" : null}
              {personalInfo.country === "TT" ? "Trinidad and Tobago" : null}
              {personalInfo.country === "TN" ? "Tunisia" : null}
              {personalInfo.country === "TR" ? "Turkey" : null}
              {personalInfo.country === "TM" ? "Turkmenistan" : null}
              {personalInfo.country === "TV" ? "Tuvalu" : null}
              {personalInfo.country === "UG" ? "Uganda" : null}
              {personalInfo.country === "UA" ? "Ukraine" : null}
              {personalInfo.country === "AE" ? "United Arab Emirates" : null}
              {personalInfo.country === "GB" ? "United Kingdom" : null}
              {personalInfo.country === "US" ? "United States" : null}
              {personalInfo.country === "UY" ? "Uruguay" : null}
              {personalInfo.country === "UZ" ? "Uzbekistan" : null}
              {personalInfo.country === "VU" ? "Vanuatu" : null}
              {personalInfo.country === "VE" ? "Venezuela" : null}
              {personalInfo.country === "VN" ? "Vietnam" : null}
              {personalInfo.country === "YE" ? "Yemen" : null}
              {personalInfo.country === "ZM" ? "Zambia" : null}
              {personalInfo.country === "ZW" ? "Zimbabwe" : null}
            </p>
            <p>
              <strong>City:</strong> {personalInfo.city}
            </p>
            <p>
              <strong>Birthday:</strong> {personalInfo.day}/{personalInfo.month}
              /{personalInfo.year}
            </p>
            <p>
              <strong>Birth Hour:</strong>{" "}
              {personalInfo.hour.toString().padStart(2, "0")}:
              {personalInfo.hour.toString().padStart(2, "0")}
            </p>
            <p>
              <strong>Zodiac Sign:</strong> {personalInfo.zodiacSign}
            </p>
            <p>
              <strong>Ascendant:</strong> {personalInfo.ascendantSign}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
