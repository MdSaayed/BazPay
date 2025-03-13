import React, { useState } from "react";
import PropTypes from "prop-types";

const SubscribeForm = ({
  btnBg = "bg-primary", // Background Color Class For Button
  btnColor = "text-white", // Text Color Class For Button
  btnText = "Subscribe", // Button Label Text
  formWidth = "w-full", // Form Width Class
  formBg = "bg-softWhite", // Form Background Class
  borderColor = "bg-softWhite", // Form Background Class
  textColor='text-primary'
}) => {
  const [email, setEmail] = useState(""); // State For Email Input
  const [error, setError] = useState(""); // State For Error Message
  const [success, setSuccess] = useState(false); // State For Success Message

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent Default Form Submission

    // Simple Email Validation
    if (!email.match(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/)) {
      setError("Please Enter A Valid Email Address.");
      return;
    }

    // Simulate Successful Subscription
    setSuccess(true); // Set Success State To True
    setError(""); // Clear Error Message
    setEmail(""); // Reset Email Input Field

    setTimeout(() => {
      setSuccess(false); // Hide Success Message After 3 Seconds
    }, 3000);
  };

  return (
    <div className={`${formWidth} form-wrapper relative z-10`}>
      <form
        onSubmit={handleSubmit}
        className={`border rounded-[32px] p-1 flex relative ${formBg} ${borderColor}`}
      >
        {/* Email Input Field */}
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full px-4 py-1 rounded-l-[32px] border-none focus:outline-none bg-transparent ${textColor? textColor :'text-primary'} ${
            error ? "border-red-500" : "border-davyGray"
          }`}
          aria-label="Email Address"
          required
        />

        {/* Subscribe Button */}
        <button
          type="submit"
          className={`opacity-95 px-6 p-1 md:py-2 rounded-[32px] hover:opacity-100 transition-colors whitespace-nowrap ${btnBg} ${btnColor}`}
        >
          {btnText}
        </button>
      </form>

      {/* Error & Success Messages */}
      <div className="absolute left-0 mt-2">
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">Thanks For Subscribing!</p>}
      </div>
    </div>
  );
};

// Prop Types Validation
SubscribeForm.propTypes = {
  btnBg: PropTypes.string, // Background Color Class For Button
  btnColor: PropTypes.string, // Text Color Class For Button
  btnText: PropTypes.string, // Button Label Text
  formWidth: PropTypes.string, // Form Width Class
  formBg: PropTypes.string, // Form Background Class
  borderColor: PropTypes.string, // Form Background Class
  textColor: PropTypes.string, // Form Background Class
};

// Default Props
SubscribeForm.defaultProps = {
  btnBg: "bg-primary",
  btnColor: "text-white",
  btnText: "Subscribe",
  formWidth: "w-full",
  formBg: "bg-softWhite",
  borderColor: "bg-softWhite",
  textColor: "text-primary",
};

export default SubscribeForm;
