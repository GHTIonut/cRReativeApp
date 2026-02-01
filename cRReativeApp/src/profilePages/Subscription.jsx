import ProfileMenu from "../Components/ProfileMenu";
import "../styles/subscription.css";
import { useState } from "react";

export default function HoroscopeSubscription() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cvv, setCvv] = useState("");

  function handleCardHolder(e) {
    let value = e.target.value;
    value = value.replace(/[^a-zA-Z\s]/g, "");

    if (value.length > 50) {
      value = value.slice(0, 50);
    }
    setCardHolder(value);
  }
  function handleCardNumber(e) {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    if (value.length > 4) {
      value = value.match(/.{1,4}/g).join(" ");
    }
    if (value.length > 19) {
      value = value.slice(0, 19);
    }
    setCardNumber(value);
  }

  function handleExpiryInput(e) {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    if (value.length > 2) {
      value = value.slice(0, 2) + " / " + value.slice(2, 4);
    }
    if (value.length > 7) {
      value = value.slice(0, 7);
    }

    if (value.length >= 2) {
      const rawMonth = value.slice(0, 2);
      if (rawMonth.length === 2) {
        const month = parseInt(rawMonth);
        const currentMonth = new Date().getMonth() + 1;
        if (month < currentMonth) {
          return;
        }
      }
    }

    if (value.length === 7) {
      const rawYear = value.slice(5, 7);
      if (rawYear.length === 2) {
        const year = parseInt(rawYear);
        const currentYear = new Date().getFullYear() % 100;
        if (year < currentYear) {
          return;
        }
      }
    }

    setExpiry(value);
  }

  function handleCvv(e) {
    let value = e.target.value;
    value = value.replace(/\D/g, "");

    if (value.length > 3) {
      value = value.slice(0, 3);
    }
    setCvv(value);
  }
  return (
    <>
      <div className="profileMenu">
        <ProfileMenu />
      </div>
      <main>
        <section>
          <form className="subscriptionForm">
            <h1>Subscription form</h1>
            <div>
              <label htmlFor="cardHolder">Card holder:</label>
              <input
                type="text"
                name="cardHolder"
                id="cardHolder"
                onChange={handleCardHolder}
                value={cardHolder}
                minLength={50}
                placeholder="Johnny Joe"
              />
              <label htmlFor="cardNumber">Card number:</label>
              <input
                type="text"
                name="cardNumber"
                id="cardNumber"
                pattern="^[0-9]{16}$"
                value={cardNumber}
                onChange={handleCardNumber}
                minLength={19}
                placeholder="1234 5678 1234 5678"
              />
              <label htmlFor="expiryDate">Expiry date:</label>
              <input
                type="text"
                name="expiryDate"
                id="expiryDate"
                onChange={handleExpiryInput}
                value={expiry}
                placeholder="MM/YY"
                minLength={7}
              />
              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                name="cvv"
                id="cvv"
                value={cvv}
                onChange={handleCvv}
                minLength={3}
                placeholder="123"
              />
            </div>
            <button>Pay</button>
          </form>
        </section>
      </main>
    </>
  );
}
