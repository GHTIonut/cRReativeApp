import "../styles/cookies.css";

export function Cookies() {
  const lastUpdate = "17th of March, 2026";
  const myMail = "ionut996ght@gmail.com";
  const mobile = "0732574235";
  return (
    <div>
      <section class="cookiePolicyContainer">
        <h1>Cookie Policy</h1>
        <p>
          <strong>Last updated:</strong> {lastUpdate}
        </p>

        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a
          website. They help the site remember your actions and preferences so
          you don’t have to re-enter them each time.
        </p>

        <h2>2. Why We Use Cookies</h2>
        <ul>
          <li>Ensure the website functions properly</li>
          <li>Keep your session active after login</li>
          <li>Remember your zodiac preferences</li>
          <li>Improve website performance</li>
          <li>Analyze traffic and usage patterns</li>
          <li>Provide optional personalized content</li>
        </ul>

        <h2>3. Types of Cookies We Use</h2>

        <h3>3.1 Essential Cookies</h3>
        <p>Required for the website to function correctly.</p>

        <h3>3.2 Preference Cookies</h3>
        <p>
          Store your choices such as zodiac sign, birth data, and display
          settings.
        </p>

        <h3>3.3 Analytics Cookies</h3>
        <p>Help us understand how visitors use the website.</p>

        <h3>3.4 Marketing Cookies (Optional)</h3>
        <p>Used only with your consent to show relevant content.</p>

        <h2>4. Third‑Party Cookies</h2>
        <p>
          Some external services may place their own cookies, such as Google
          Analytics. These third parties do not receive your personal data from
          us.
        </p>

        <h2>5. How to Control Cookies</h2>
        <p>
          You can manage or disable cookies through your browser settings.
          Disabling essential cookies may affect website functionality.
        </p>

        <h2>6. Updates to This Cookie Policy</h2>
        <p>
          We may update this policy from time to time. Changes will be posted on
          this page with an updated “Last updated” date.
        </p>

        <h2>7. Contact</h2>
        <p>
          For questions about this Cookie Policy, contact us at:
          <ul>
            <li>Email: {myMail}</li>
            <li>Mobile: {mobile}</li>
          </ul>
        </p>
      </section>
    </div>
  );
}
