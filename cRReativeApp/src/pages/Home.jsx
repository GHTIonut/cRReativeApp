import "../styles/home.css";
// import SideBar from "../Components/SideBar.jsx";

export default function Home() {
  return (
    <div>
      {/* <SideBar /> */}
      <div className="homePageContent">
        <div>
          <h1>Welcome to your zodiac space.</h1>
        </div>
        <div>
          <p>
            Explore horoscopes, zodiac signs, and astrological insights designed
            to help you understand yourself and the world around you. Whether
            you're checking your daily horoscope or diving deeper into
            astrological wisdom, everything is designed to be clear, engaging,
            and easy to explore.
          </p>
          <p>
            Stay connected with the rhythms of the universe through regular
            updates, thoughtful interpretations, and practical guidance you can
            use in everyday life.
          </p>
          <p>
            Your journey through the stars starts here. Discover what makes each
            zodiac sign unique, from personality traits and strengths to love
            compatibility and career tendencies.
          </p>
          <p>
            Astrology doesn't have to be complicated — it's here to inspire
            reflection, curiosity, and self-awareness. Start by selecting your
            zodiac sign and let the stars guide you.
          </p>
        </div>
      </div>
    </div>
  );
}
