import React, { useCallback, useContext, useEffect, useState } from "react";
import "../styles/form.css";
import transformedQuestionnaire from "../data/InitialQuestions";
import { FinSlnContext } from "../App";
import { useNavigate } from "react-router-dom";
import update_business from "../utils/updateBusiness";
import smallBusinessQuestions from "../data/smallQuestions";
import microBusinessQuestions from "../data/microQuestions";
import ideaBusinessQuestions from "../data/ideaQuestions";
import midBusinessQuestions from "../data/midQuestions";
import startupBusinessQuestions from "../data/startupQuestions";

const ClientQuestionnaire = () => {
  const [FinSlnState, setFinSlnState] = useContext(FinSlnContext);
  let navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const getQuestionFlows = useCallback(
    (businessQuestionArray) => {
      let previous_round =
        FinSlnState.dynamoDBObjectForBusiness.business.questions || [];
      let i = 0;
      return businessQuestionArray.map((questionObj) => {
        let my_answer = "";
        if (previous_round[i] && previous_round[i].answer !== "") {
          my_answer = previous_round[i].answer;
        } else {
          my_answer = "";
        }
        i = i + 1;
        return {
          question: questionObj.question,
          answer: my_answer,
          placeholder: questionObj.placeholder,
        };
      });
    },
    [FinSlnState.dynamoDBObjectForBusiness.business.questions]
  );

  let questionsFlow = getQuestionFlows(transformedQuestionnaire) || [];
  const [answers, setAnswers] = useState(questionsFlow);

  useEffect(() => {
    const SmallBusinessQuestionsFlow = getQuestionFlows(smallBusinessQuestions);
    const MicroBusinessQuestionsFlow = getQuestionFlows(microBusinessQuestions);
    const IdeaBusinessQuestionsFlow = getQuestionFlows(ideaBusinessQuestions);
    const StartupBusinessQuestionsFlow = getQuestionFlows(
      startupBusinessQuestions
    );
    const MidBusinessQuestionsFlow = getQuestionFlows(midBusinessQuestions);

    const businessType =
      FinSlnState.dynamoDBObjectForBusiness.business.info.type;
    let updatedAnswers = [];

    if (businessType === "Idea") {
      updatedAnswers = IdeaBusinessQuestionsFlow;
    } else if (businessType === "Micro Business") {
      updatedAnswers = MicroBusinessQuestionsFlow;
    } else if (businessType === "Small Business") {
      updatedAnswers = SmallBusinessQuestionsFlow;
    } else if (businessType === "Mid-Size Business") {
      updatedAnswers = MidBusinessQuestionsFlow;
    } else if (businessType === "Startup") {
      updatedAnswers = StartupBusinessQuestionsFlow;
    } else {
      updatedAnswers = getQuestionFlows(transformedQuestionnaire);
    }

    setAnswers(updatedAnswers);
  }, [
    FinSlnState.dynamoDBObjectForBusiness.business.info.type,
    getQuestionFlows,
  ]);

  const [isSaved, setIsSaved] = useState(false);

  const handleAnswerChange = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex].answer = answer;
    setAnswers(updatedAnswers);
    setIsSaved(false);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < answers.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    setIsSaved(false);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
    setIsSaved(false);
  };

  const handleSave = () => {
    setFinSlnState({
      ...FinSlnState,
      dynamoDBObjectForBusiness: {
        ...FinSlnState.dynamoDBObjectForBusiness,
        business: {
          ...FinSlnState.dynamoDBObjectForBusiness.business,
          questions: answers,
        },
      },
    });

    save_to_dynamoDB({
      ...FinSlnState.dynamoDBObjectForBusiness,
      business: {
        ...FinSlnState.dynamoDBObjectForBusiness.business,
        questions: answers,
      },
    });

    setIsSaved(true);
  };

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCheckboxChecked) {
      navigate("/pay"); // Navigate to the payment page
    }
  };

  let save_to_dynamoDB = (SaveState) => {
    update_business(SaveState);
  };

  const currentQuestionObj = answers[currentQuestionIndex];
  return (
    <div key={FinSlnState.dynamoDBObjectForBusiness.uuid}>
      <h2>Goals and Achievements</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <p>
            Question {currentQuestionIndex + 1} of {answers.length}:
          </p>
          <label className="info-label">{currentQuestionObj.question}</label>
          <textarea
            rows="4"
            cols="50"
            value={answers[currentQuestionIndex].answer}
            onChange={(e) => handleAnswerChange(e.target.value)}
            placeholder={currentQuestionObj.placeholder}
          />
        </div>
        <div>
          {/* Consent Checkbox */}
          <label>
            <input
              type="checkbox"
              checked={isCheckboxChecked}
              onChange={handleCheckboxChange}
            />
            I consent to the
            <span
              style={{ cursor: "pointer", textDecoration: "none" }}
              onClick={() => navigate("/terms")}
            >
              {" "}
              terms and conditions
            </span>
          </label>
        </div>
        <div>
          <button
            type="button"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          <button
            type="button"
            onClick={handleNextQuestion}
            disabled={currentQuestionIndex === answers.length - 1}
          >
            Next
          </button>
          <button type="button" onClick={handleSave}>
            Save
          </button>
          <button
            type="back-button"
            onClick={() => {
              navigate("/listings");
            }}
          >
            Back
          </button>

          {currentQuestionIndex === answers.length - 1 && (
            <button type="submit" disabled={!isCheckboxChecked}>
              Reserve Growth Assessment
            </button>
          )}
        </div>
        {isSaved && <p style={{ color: "green" }}>Form data has been saved.</p>}
      </form>
    </div>
  );
};

export default ClientQuestionnaire;
