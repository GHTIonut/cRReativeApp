import "../styles/privacyPolicy.css";

export function PrivacyPolicy() {
  const lastUpdate = "17th of March, 2026";
  const myMail = "ionut996ght@gmail.com";
  const mobile = "0732574235";
  return (
    <section className="privacyPolicyContainer">
      <h1>Privacy Policy</h1>
      <p>
        <strong>Last updated:</strong> {lastUpdate}
      </p>

      <p>
        This Privacy Policy explains how we collect, use, store, and protect
        your personal information when you use our horoscope website. By
        accessing or using this website, you agree to the practices described in
        this policy.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>1.1 Information you provide directly</h3>
      <ul>
        <li>Name or username</li>
        <li>Email address</li>
        <li>Date of birth</li>
        <li>Birth time (hour, minute, second)</li>
        <li>Birth location (city, country)</li>
        <li>Zodiac sign or astrological preferences</li>
        <li>Account login information</li>
      </ul>

      <h3>1.2 Automatically collected information</h3>
      <ul>
        <li>IP address</li>
        <li>Device type and browser type</li>
        <li>Pages visited and time spent on the site</li>
        <li>Cookies and tracking data</li>
        <li>General location (country/region)</li>
      </ul>

      <h3>1.3 Optional information</h3>
      <ul>
        <li>Personality preferences</li>
        <li>Saved horoscope entries</li>
        <li>Compatibility selections</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use your data to:</p>
      <ul>
        <li>Provide personalized horoscope content</li>
        <li>Generate astrological insights (e.g., ascendant, compatibility)</li>
        <li>Improve website performance and user experience</li>
        <li>Manage your account and authentication</li>
        <li>Send optional updates or newsletters (only with your consent)</li>
        <li>Ensure website security and prevent misuse</li>
      </ul>
      <p>
        We do not use your data for automated decision‑making that produces
        legal or significant effects.
      </p>

      <h2>3. Legal Basis for Processing (GDPR)</h2>
      <p>We process your data based on:</p>
      <ul>
        <li>
          <strong>Your consent</strong> (e.g., newsletter, personalized
          horoscope)
        </li>
        <li>
          <strong>Contractual necessity</strong> (account creation and login)
        </li>
        <li>
          <strong>Legitimate interest</strong> (website security, analytics)
        </li>
        <li>
          <strong>Legal obligations</strong> (if required by law)
        </li>
      </ul>
      <p>You may withdraw your consent at any time.</p>

      <h2>4. How We Store and Protect Your Data</h2>
      <p>
        We take appropriate technical and organizational measures to protect
        your information, including:
      </p>
      <ul>
        <li>Encrypted password storage</li>
        <li>Secure server environments</li>
        <li>Limited access to personal data</li>
        <li>Regular security monitoring</li>
      </ul>
      <p>However, no online service can guarantee 100% security.</p>

      <h2>5. Sharing Your Information</h2>
      <p>We do not sell or rent your personal data.</p>
      <p>We may share your information only with:</p>
      <ul>
        <li>
          Service providers that help operate the website (hosting, analytics)
        </li>
        <li>Legal authorities, if required by law</li>
        <li>Third‑party tools only with your explicit consent</li>
      </ul>
      <p>
        All third parties are required to protect your data according to GDPR
        standards.
      </p>

      <h2>6. Cookies and Tracking Technologies</h2>
      <p>We use cookies to:</p>
      <ul>
        <li>Remember your preferences</li>
        <li>Improve website performance</li>
        <li>Analyze traffic and usage patterns</li>
      </ul>
      <p>
        You can manage or disable cookies through your browser settings. For
        more details, see our Cookie Policy (if applicable).
      </p>

      <h2>7. Your Rights Under GDPR</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access your personal data</li>
        <li>Correct inaccurate information</li>
        <li>Request deletion (“right to be forgotten”)</li>
        <li>Restrict or object to processing</li>
        <li>Withdraw consent</li>
        <li>Request a copy of your data (data portability)</li>
      </ul>
      <p>To exercise these rights, contact us at the email below.</p>

      <h2>8. Data Retention</h2>
      <p>We keep your data only as long as necessary for:</p>
      <ul>
        <li>Account functionality</li>
        <li>Legal obligations</li>
        <li>Service improvement</li>
      </ul>
      <p>
        If you delete your account, we remove or anonymize your data unless law
        requires otherwise.
      </p>

      <h2>9. Children’s Privacy</h2>
      <p>
        This website is not intended for users under 16 years old. We do not
        knowingly collect data from minors. If you believe a minor has provided
        personal information, contact us to remove it.
      </p>

      <h2>10. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated “Last updated” date. Continued use
        of the website means you accept the revised policy.
      </p>

      <h2>11. Contact Information</h2>
      <p>
        If you have questions or requests regarding your personal data, you can
        contact us at:
      </p>
      <ul>
        <li>Email: {myMail}</li>
        <li>Phone: {mobile}</li>
      </ul>
    </section>
  );
}
