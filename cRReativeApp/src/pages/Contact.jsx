import "../styles/contact.css";
import IonutImage from "../assets/Ionut.png";

export function Contact() {
  return (
    <div className="contactContainer">
      <div className="developerInfo">
        <img src={IonutImage} alt="creator" />
        <ul>
          <li>Name: Ghita;</li>
          <li>Surname: Ionut-Cristian;</li>
          <li>Age: 29;</li>
          <li>Location: Bucharest.</li>
          <li>Technology: HTML, CSS, JavaScript, React, Node.js, Bootstrap</li>
          <li>Studies: Web complete at Scoala Informala de IT.</li>
        </ul>
      </div>
      <div>
        <h1>Contact</h1>
        <div>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/ionut-cristian-ghita-79a96a3b3/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/GHTIonut">Git</a>
            </li>
            <li>Email: ght996ionut@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
