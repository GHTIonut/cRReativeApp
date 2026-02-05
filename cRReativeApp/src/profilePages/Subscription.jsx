import ProfileMenu from "../Components/ProfileMenu";
import "../styles/subscription.css";
import { useEffect, useState } from "react";

export default function HoroscopeSubscription() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cvv, setCvv] = useState("");
  const [paymentButton, setPaymentButton] = useState(false);
  const [oneWeekPlanMessage, setOneWeekPlanMessage] = useState("");
  const [twoWeeksPlanMessage, setTwoWeeksPlanMessage] = useState("");

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
        if (month < currentMonth || month > 12) {
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

    setCardExpiry(value);
  }

  function handleCvv(e) {
    let value = e.target.value;
    value = value.replace(/\D/g, "");

    if (value.length > 3) {
      value = value.slice(0, 3);
    }
    setCvv(value);
  }

  useEffect(() => {
    if (
      cardHolder.length > 0 &&
      cardNumber.length === 19 &&
      cardExpiry.length === 7 &&
      cvv.length === 3
    ) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPaymentButton(true);
    } else {
      setPaymentButton(false);
    }
  }, [cardHolder, cardNumber, cardExpiry, cvv]);

  function oneWeekPlanText() {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const nextWeek = new Date();
    nextWeek.setDate(tomorrow.getDate() + 7);
    const tomorrowString = tomorrow.toLocaleDateString();
    const nextWeekString = nextWeek.toLocaleDateString();
    const cost = 5;
    const currency = "EUR";

    setOneWeekPlanMessage(
      <>
        <div>
          You will receive detailed daily horoscope from tomorrow,{" "}
          {tomorrowString}, until {nextWeekString}.
        </div>
        <div>
          The total cost for this service is {currency}
          {""} {cost}.
        </div>
      </>,
    );
  }

  function twoWeeksPlanText() {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const twoWeeksLater = new Date();
    twoWeeksLater.setDate(tomorrow.getDate() + 14);
    const tomorrowString = tomorrow.toLocaleDateString();
    const twoWeeksLaterString = twoWeeksLater.toLocaleDateString();
    const cost = 7.5;
    const currency = "EUR";

    setTwoWeeksPlanMessage(
      <>
        <div>
          You will receive detailed daily horoscope from tomorrow,{" "}
          {tomorrowString}, until {twoWeeksLaterString}.
        </div>
        <div>
          The total cost for this service is {currency}
          {""} {cost}.
        </div>
      </>,
    );
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
            <div className="inputDivs">
              <label htmlFor="cardHolder">Card holder:</label>
              <input
                type="text"
                name="cardHolder"
                id="cardHolder"
                onChange={handleCardHolder}
                value={cardHolder}
                maxLength={50}
                placeholder="Johnny Joe"
              />
              <label htmlFor="cardNumber">Card number:</label>
              <input
                type="text"
                name="cardNumber"
                id="cardNumber"
                pattern="^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$"
                value={cardNumber}
                onChange={handleCardNumber}
                minLength={19}
                maxLength={19}
                placeholder="1234 5678 1234 5678"
              />
              <label htmlFor="expiryDate">Expiry date:</label>
              <input
                type="text"
                name="expiryDate"
                id="expiryDate"
                onChange={handleExpiryInput}
                value={cardExpiry}
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
            <div className="subscriptionPlans">
              <div>
                <label htmlFor="oneWeekPlan">One week plan</label>
                <input
                  type="radio"
                  name="subscriptionPlan"
                  id="oneWeekPlan"
                  onChange={oneWeekPlanText}
                />
                <label htmlFor="twoWeeksPlan">Two weeks plan</label>
                <input
                  type="radio"
                  name="subscriptionPlan"
                  id="twoWeeksPlan"
                  onChange={twoWeeksPlanText}
                />
                <label htmlFor="oneMonthPlan">One month plan</label>
                <input type="radio" name="subscriptionPlan" id="oneMonthPlan" />
                <div>{oneWeekPlanMessage}</div>
                <div>{twoWeeksPlanMessage}</div>
              </div>
            </div>
            <button disabled={!paymentButton}>Pay</button>
          </form>
        </section>
      </main>
    </>
  );
}
