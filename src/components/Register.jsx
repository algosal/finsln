import React, { useState } from "react";
import "../styles/Register.css"; // Import your CSS styles
import register_user from "../utils/register.service";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState({
    hasCapitalLetter: false,
    hasSymbol: false,
    hasNumber: false,
    isMinLength: false,
  });

  const handlePasswordChange = (newPassword) => {
    const validation = {
      hasCapitalLetter: /[A-Z]/.test(newPassword),
      hasSymbol: /[(),!@#]/.test(newPassword),
      hasNumber: /[0-9]/.test(newPassword),
      isMinLength: newPassword.length >= 8,
    };
    setPasswordValidation(validation);
    setPassword(newPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      password === confirmPassword &&
      passwordValidation.hasCapitalLetter &&
      passwordValidation.hasSymbol &&
      passwordValidation.hasNumber &&
      passwordValidation.isMinLength
    ) {
      register_user({
        email,
        password,
        first_name: firstName,
        last_name: lastName,
      }).then((d) => {
        // Simulate registration process (you can implement actual API calls here)
        alert(d);
        setIsRegistered(true);
      });
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Unlock Financial Excellence</h2>
      <p className="register-description">
        Join the league of financial pioneers. Register now and embark on a
        journey towards unparalleled prosperity.
      </p>
      {isRegistered ? (
        <div className="registration-success">
          <h3>Welcome Aboard!</h3>
          <p>Your financial future begins now.</p>
        </div>
      ) : (
        <form className="registration-form" onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            required
          />
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <div className="password-validation">
            {passwordValidation.hasCapitalLetter ? (
              <span className="validation-success">Has capital letter</span>
            ) : (
              <span className="validation-fail">Missing capital letter</span>
            )}
            {passwordValidation.hasSymbol ? (
              <span className="validation-success">Has symbol</span>
            ) : (
              <span className="validation-fail">Missing symbol</span>
            )}
            {passwordValidation.hasNumber ? (
              <span className="validation-success">Has number</span>
            ) : (
              <span className="validation-fail">Missing number</span>
            )}
            {passwordValidation.isMinLength ? (
              <span className="validation-success">
                Minimum length satisfied
              </span>
            ) : (
              <span className="validation-fail">Too short</span>
            )}
          </div>
          <button
            className="register-button"
            disabled={!passwordValidation.isMinLength}
          >
            Join Now
          </button>
        </form>
      )}
    </div>
  );
};

export default Register;
