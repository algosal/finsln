import React from "react";
import "../styles/TermsAndConditions.css"; // Adjust the path to your CSS file

const TermsAndConditions = () => {
  return (
    <div className="terms-and-conditions">
      <h2>Terms and Conditions</h2>
      <p>
        By accessing and using our website, you agree to abide by the following
        terms and conditions:
      </p>
      <ol>
        <li>
          The information provided on this website is for general informational
          purposes only. It does not constitute professional advice, and you
          should not solely rely on it.
        </li>
        <li>
          The content, including text, images, and graphics, on this website is
          the property of FinSln and is protected by copyright laws.
        </li>
        <li>
          We reserve the right to modify, update, or discontinue any part of the
          website without prior notice.
        </li>
        <li>
          Your use of any information or materials on this website is entirely
          at your own risk, and we shall not be liable for any damages arising
          from such use.
        </li>
        <li>
          Links to external websites are provided for your convenience, but we
          do not endorse or take responsibility for the content of those sites.
        </li>
      </ol>
      <p>
        By using this website, you acknowledge that you have read and understood
        these terms and conditions. If you do not agree with these terms, please
        refrain from using our website.
      </p>
    </div>
  );
};

export default TermsAndConditions;
