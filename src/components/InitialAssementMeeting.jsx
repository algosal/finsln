import React from "react";
import "../styles/IAM.css"; // Make sure to adjust the path to your CSS file
import { useNavigate } from "react-router-dom";

const InitialGrowthAssessment = () => {
  let navigate = useNavigate();
  const goBack = () => {
    navigate("/dashboard");
  };
  return (
    <div className="initial-growth-assessment">
      <section className="section">
        <h2>Initial Growth Assessment Meeting</h2>
        <h3>Your Information Gathering Session</h3>
        <p>
          At FinSln, our initial growth assessment meeting serves as an
          empowering launchpad for your company's journey towards expansion. By
          delving into vital aspects including production efficiency, pricing
          strategies, differentiation tactics, market positioning, revenue
          drivers, and more, we provide you with a comprehensive understanding
          of your business landscape. This collaborative session is designed to
          offer strategic insights, illuminating the path for informed
          decision-making and propelling your business toward realizing its full
          growth potential.
        </p>
      </section>

      <section className="section">
        <h2>Tailored Growth Solutions</h2>
        <h3>Unveiling Your Path Forward</h3>
        <p>
          After our dynamic initial growth assessment meeting, we embark on a
          dedicated analysis phase. Here, we meticulously dissect the
          information gathered in our meeting and combine it with additional
          research to formulate a customized growth strategy. Drawing from
          detailed analyses of production efficiency, pricing strategies, market
          positioning, and more, we will provide you with a written report
          containing actionable recommendations that align with your specific
          business goals. This report is designed to not only present insights
          but also offer practical strategies that can elevate your company to
          new heights. Your journey towards growth doesn't stop at the meeting;
          it's amplified through the insights and solutions we deliver in the
          subsequent report.
        </p>
      </section>
      <button type="back-button" onClick={goBack}>
        Back
      </button>
    </div>
  );
};

export default InitialGrowthAssessment;
