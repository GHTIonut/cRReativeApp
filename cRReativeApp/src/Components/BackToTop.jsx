import "../styles/backToTopButton.css";

export function BackToTop() {
  return (
    <div className="backToTopButtonContainer">
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="backToTopButton"
      >
        Back to top
      </button>
    </div>
  );
}
