import "../styles/footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <button onClick={() => navigate("/TermsAndConditions")}>
        Terms and conditions
      </button>
      <button>Privacy policy</button>
      <button>Cookies</button>
      <button>Contact</button>
    </div>
  );
}
