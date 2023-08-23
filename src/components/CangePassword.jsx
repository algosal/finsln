import React, { useState } from "react";
import "../styles/Password.css"; // Import the CSS file
import sendEmailToChangePassword from "../utils/passwordChangeEmailSender";
import { useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  let navigate = useNavigate();

  const handleResetPassword = () => {
    if (email === confirmEmail) {
      sendEmailToChangePassword({ email: email }).then((d) => {
        alert(d);
        navigate("/");
      });
      // Perform the password reset logic here
      console.log("Password reset initiated for email:", email);
      // You can trigger an API call or other action for password reset

      // Clear the fields
      setEmail("");
      setConfirmEmail("");
      setErrorMessage("");
    } else {
      setErrorMessage("Email addresses do not match. Please try again.");
    }
  };

  return (
    <div className="password-reset">
      <h2>Password Reset</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Confirm Email:</label>
        <input
          type="email"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
        />
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
};

export default PasswordReset;
