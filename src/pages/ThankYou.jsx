export default function ThankYou() {
  setTimeout(function () {
    window.location.href = "https://master--heartfelt-choux-9faeed.netlify.app/";
  }, 5000)
  window.onload = function() {
    window.scrollTo(0, 0);
  }
  return (
    <div className="ThankYou" style={{
      textAlign: "center",
    }}>
      <h1>Thank you!</h1>
      <p>
        Your order has been received. Our specialists will contact with you
        shortly to confirm it.
      </p>
    </div>
  );
}
