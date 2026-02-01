import ProfileMenu from "../Components/ProfileMenu";
import "../styles/subscription.css";

export default function HoroscopeSubscription() {
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
              />
              <label htmlFor="expiryDate">Expiry date:</label>
              <input type="text" name="expiryDate" id="expiryDate" />
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
