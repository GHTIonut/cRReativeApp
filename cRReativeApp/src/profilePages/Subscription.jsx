import ProfileMenu from "../Components/ProfileMenu";
import "../styles/subscription.css";
import { useState } from "react";

export default function HoroscopeSubscription() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
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
    if (value.length > 5) {
      value = value.slice(0, 5);
    }
    setExpiry(value);
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
              <input type="text" name="cardHolder" id="cardHolder" />
              <label htmlFor="cardNumber">Card number:</label>
              <input
                type="text"
                name="cardNumber"
                id="cardNumber"
                pattern="^[0-9]{16}$"
                value={cardNumber}
                onChange={handleCardNumber}
              />
              <label htmlFor="expiryDate">Expiry date:</label>
              <input
                type="text"
                name="expiryDate"
                id="expiryDate"
                onChange={handleExpiryInput}
                value={expiry}
                placeholder="MM/YY"
              />
              <label htmlFor="cvv">CVV:</label>
              <input type="text" name="cvv" id="cvv" />
            </div>
            <button>Pay</button>
          </form>
        </section>
      </main>
    </>
  );
}
