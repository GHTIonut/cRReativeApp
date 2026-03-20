import "../styles/footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <button onClick={() => navigate("/TermsAndConditions")}>
        Terms and conditions
      </button>
      <button onClick={() => navigate("/PrivacyPolicy")}>Privacy policy</button>
      <button onClick={() => navigate("/Cookies")}>Cookie policy</button>
      <button onClick={() => navigate("/Contact")}>Contact</button>
    </div>
  );
}
