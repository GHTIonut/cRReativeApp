import { useEffect, useState } from "react";
import "../styles/news.css";

export default function News() {
  const [news, setNews] = useState({});

  useEffect(() => {
    async function loadNews() {
      const res = await fetch("http://localhost:3000/news");
      const json = await res.json();
      setNews(json);
    }
    loadNews();
  }, []);

  return (
    <div className="newsContainer">
      <h1>Latest news about zodiac signs</h1>
      {Object.entries(news).map(([sign, text]) => (
        <div key={sign}>
          <h2>{sign.toUpperCase()}</h2>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}
