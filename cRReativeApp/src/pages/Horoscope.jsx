import "../styles/horoscope.css";
import { useState } from "react";
export default function Horoscope() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  async function getHoroscope(sign) {
    try {
      setLoading(true);
      setData(null);
      const res = await fetch(
        `https://api.api-ninjas.com/v1/horoscope?zodiac=${sign}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": "VxpLiFQZKPBs1Jz2ARfVJDShxQaYRZCWkzqacWz4",
            "Content-Type": "application/json",
          },
        }
      );
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      {" "}
      <div className="horoscopeMenu">
        {" "}
        <button onClick={() => getHoroscope("aries")}>Aries</button>
        <button onClick={() => getHoroscope("taurus")}>Taurus</button>
        <button onClick={() => getHoroscope("gemini")}>Gemini</button>
        <button onClick={() => getHoroscope("cancer")}>Cancer</button>
        <button onClick={() => getHoroscope("leo")}>Leo</button>
        <button onClick={() => getHoroscope("virgo")}>Virgo</button>
        <button onClick={() => getHoroscope("libra")}>Libra</button>
        <button onClick={() => getHoroscope("scorpio")}>Scorpio</button>
        <button onClick={() => getHoroscope("sagittarius")}>Sagittarius</button>
        <button onClick={() => getHoroscope("capricorn")}>Capricorn</button>
        <button onClick={() => getHoroscope("aquarius")}>Aquarius</button>
        <button onClick={() => getHoroscope("pisces")}>Pisces</button>
      </div>{" "}
      <div className="horoscopeText">
        {loading && (
          <div className="loader">
            <div className="spinner"></div>
            <p>Reading the stars...</p>
          </div>
        )}
        {!loading && !data && (
          <>
            <h1>Your destiny lies among the constellations</h1>
            <p>
              Step into the realm where time slows, the veil thins, and the
              ancient language of the stars becomes clear. Here, beneath the
              silent glow of distant constellations, your zodiac sign awakens —
              carrying stories written long before your first breath.
            </p>
            <p>
              Every sign holds a path, every planet whispers a lesson, and every
              alignment shapes the rhythm of your days in ways both subtle and
              profound. Choose your sign and allow the universe to guide you.
            </p>
            <p>
              Today, the stars have gathered their messages for you. All you
              need to do is open your mind, breathe deeply, and let their wisdom
              unfold.
            </p>
          </>
        )}
        {data && !loading && (
          <div className="result">
            <h2>{data.sign}</h2>
            <p>{data.horoscope}</p>
          </div>
        )}
      </div>
    </>
  );
}
