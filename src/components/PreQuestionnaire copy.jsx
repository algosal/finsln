import React, { useContext, useEffect, useState } from "react";
import "../styles/form.css";
import initialQuestionnaire from "../data/InitialQuestions";
import smallQuestionnaire from "../data/smallQuestions";
import clientQuestions from "../data/ClientQuestions";
import { FinSlnContext } from "../App";
import { useNavigate } from "react-router-dom";
// import add_business from "../utils/addBusiness";
import update_business from "../utils/updateBusiness";

const ClientQuestionnaire = () => {
  const [FinSlnState, setFinSlnState] = useContext(FinSlnContext);
  // console.log(FinSlnState.dynamoDBObjectForBusiness);
  let navigate = useNavigate();
  const [questions, setQuestions] = useState(initialQuestionnaire);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(
    questions.map((question) => ({ question: question, answer: "" }))
  );
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // console.log(FinSlnState.dynamoDBObjectForBusiness);
    let MyBusiness = FinSlnState.dynamoDBObjectForBusiness.business;
    // console.log(MyBusiness.info.type);
    if (MyBusiness.questions.length === 0) {
      if (MyBusiness.info.type === "Idea") {
        setQuestions(smallQuestionnaire);
        // console.log(questions);
      }

      if (MyBusiness.info.type === "big") {
        setQuestions(clientQuestions);
      }

      setAnswers(
        questions.map((question) => ({ question: question, answer: "" }))
      );
    } else {
      // setCurrentQuestionIndexx(MyBusiness.questions.length);
      setAnswers(MyBusiness.questions);
    }
    return () => {};
  }, [questions]);

  const handleAnswerChange = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex].answer = answer;
    setAnswers(updatedAnswers);
    setIsSaved(false);
  };

  const handleNextQuestion = () => {
    console.log(currentQuestionIndex, "also check", answers.length - 1);
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
    console.log("Form data saved:", FinSlnState);
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
    // save_to_dynamoDB({ ...FinSlnState, questions: answers, uuid: Fin });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/pay");
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
    // Here, you can use the 'answers' array with the client's responses
    console.log("Client's answers:", answers);
    save_to_dynamoDB({
      ...FinSlnState.dynamoDBObjectForBusiness,
      business: {
        ...FinSlnState.dynamoDBObjectForBusiness.business,
        questions: answers,
      },
    });
  };

  let save_to_dynamoDB = (SaveState) => {
    console.log(SaveState);
    update_business(SaveState);
    // goBackToDisplay();
  };

  const currentQuestion = answers[currentQuestionIndex].question;
  // console.log({ business, answers });
  return (
    <div key={FinSlnState.dynamoDBObjectForBusiness.uuid}>
      <h2>Goals and Achievements</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <p>
            Question {currentQuestionIndex + 1} of {answers.length}:
          </p>
          <label className="info-label">{currentQuestion}</label>
          <textarea
            rows="4"
            cols="50"
            value={answers[currentQuestionIndex].answer}
            onChange={(e) => handleAnswerChange(e.target.value)}
            placeholder="If you don't have the answer to this question just click next and go ahead, or save to come back later"
          />
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
            disabled={currentQuestionIndex === questions.length - 1}
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
            <button type="submit">
              Reserve the Initial Growth Assessment Meeting
            </button>
          )}
        </div>
        {isSaved && <p style={{ color: "green" }}>Form data has been saved.</p>}
      </form>
    </div>
  );
};

export default ClientQuestionnaire;
