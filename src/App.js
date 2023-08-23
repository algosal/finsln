import "./App.css";
import BusinessChallenges from "./components/BusinessChallenges";
// import BusinessInfoForm from './components/BusinessInfoForm';
// import Businesses from './components/Businesses';
import WelcomePage from "./components/Introduction";
import ClientQuestionnaire from "./components/PreQuestionnaire";
// import ProductCards from './components/Products';
import SquarePaymentComponent from "./pay/SqaurePaymentComponent";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import BusinessList from "./components/BusinessList";
import BusinessInsert from "./components/BusinessInsert";
import Register from "./components/Register";
import Login from "./components/Login";
import ProductCards from "./components/Products";
import Businesses from "./components/Businesses";
// import DesiresAndWantsForm from "./components/ProductInfo";
import BusinessUpdate from "./components/BusinessUpdate";
import ReasonInputForm from "./components/reasons/ReasonInputForm";
import reasonsToDoBsuiness from "./components/reasons/reasonsData";
import Dashboard from "./components/dashhborad/Dashboard";
import InitialGrowthAssessment from "./components/InitialAssementMeeting";
import TermsAndConditions from "./components/Terms";
import PasswordReset from "./components/CangePassword";

const fields = [
  { name: "name", type: "text", label: "Business Name" },
  { name: "revenue", type: "number", label: "Revenue" },
  { name: "email", type: "email", label: "Email" },
  { name: "phoneNumber", type: "text", label: "Phone Number" },
  { name: "address", type: "text", label: "Address" },
  {
    name: "type",
    type: "select",
    label: "Type",
    options: ["Type 1", "Type 2", "Type 3"],
  },
];

export const FinSlnContext = React.createContext();

function App() {
  let Full_FinSlnInitialState = {
    "FinSln State": "FinSln State Initialized",
    authenticated: false,
    dynamoDBObjectForBusiness: {
      uuid: "",
      business: {
        info: {},
        questions: [],
      },
      email: "",
    },
  };
  const [FinSlnState, setFinSlnState] = useState(Full_FinSlnInitialState);
  // const [authenticated,setAuthenticated] = useState(false)
  let mainMenu = () => {
    setFinSlnState({ ...FinSlnState, FinSlnState: "FinSln State Resetted" });
  };
  let logout = () => {
    setFinSlnState({
      FinSlnState: "FinSln State Resetted",
      authenticated: false,
    });
  };
  // let login = () => {
  //   // setAuthenticated(true)
  //   setFinSlnState({ ...FinSlnState, authenticated: true });
  // };

  return (
    <BrowserRouter>
      <FinSlnContext.Provider value={[FinSlnState, setFinSlnState]}>
        <div className="">
          <div className="">
            <div className="main-heading-div">
              <h1 className="finsln">
                Fin
                <Link to="/" className="link">
                  <span className="s" onClick={mainMenu}>
                    S
                  </span>
                </Link>
                ln
              </h1>
              <Link to={"/services"}>
                <p className="lead">Financial Solutions</p>
              </Link>
            </div>
            <div>
              {!FinSlnState.authenticated ? (
                <div className="credentials">
                  <Link to="/register">
                    <button className="login">register</button>
                  </Link>
                  <Link to="/login">
                    <button className="register">login</button>
                  </Link>
                </div>
              ) : (
                <div className="credentials">
                  <Link to="/">
                    <button className="login-name" onClick={logout}>
                      {" "}
                      <span className="logout">Logout</span>
                    </button>
                  </Link>
                </div>
              )}
              <div className="App">
                <Routes>
                  {/* {(!FinSlnState.authenticated) ?<></>:<></>} */}
                  <Route path="/" element={<WelcomePage />} />
                  {FinSlnState.authenticated ? (
                    <Route path="/pay" element={<SquarePaymentComponent />} />
                  ) : (
                    <Route path="pay" element={<Login />} />
                  )}
                  {FinSlnState.authenticated ? (
                    <Route
                      path="/questions"
                      element={<ClientQuestionnaire />}
                    />
                  ) : (
                    <Route path="questions" element={<Login />} />
                  )}
                  {FinSlnState.authenticated ? (
                    <Route
                      path="/info"
                      element={<BusinessInsert fields={fields} />}
                    />
                  ) : (
                    <Route path="info" element={<Login />} />
                  )}
                  {FinSlnState.authenticated ? (
                    <Route path="/listings" element={<BusinessList />} />
                  ) : (
                    <Route path="listings" element={<Login />} />
                  )}
                  <Route path="/challenges" element={<BusinessChallenges />} />
                  <Route path="register" element={<Register />} />
                  <Route path="login" element={<Login />} />
                  <Route path="services" element={<ProductCards />} />
                  <Route path="businesses" element={<Businesses />} />
                  <Route path="password-reset" element={<PasswordReset />} />
                  {/* <Route path="productinfo" element={<DesiresAndWantsForm />} /> */}
                  {FinSlnState.authenticated ? (
                    <Route
                      path="/personal-survey"
                      element={
                        <ReasonInputForm reasons={reasonsToDoBsuiness} />
                      }
                    />
                  ) : (
                    <Route path="personal-survey" element={<Login />} />
                  )}{" "}
                  {FinSlnState.authenticated ? (
                    <Route
                      path="/reasons"
                      element={
                        <ReasonInputForm reasons={reasonsToDoBsuiness} />
                      }
                    />
                  ) : (
                    <Route path="reasons" element={<Login />} />
                  )}{" "}
                  {FinSlnState.authenticated ? (
                    <Route path="/edit" element={<BusinessUpdate />} />
                  ) : (
                    <Route path="/edit" element={<Login />} />
                  )}{" "}
                  {FinSlnState.authenticated ? (
                    <Route
                      path="/client-questionnaire"
                      element={<ClientQuestionnaire />}
                    />
                  ) : (
                    <Route path="/client-questionnaire" element={<Login />} />
                  )}
                  {FinSlnState.authenticated ? (
                    <Route path="/q" element={<ClientQuestionnaire />} />
                  ) : (
                    <Route path="/q" element={<Login />} />
                  )}
                  {FinSlnState.authenticated ? (
                    <Route path="/dashboard" element={<Dashboard />} />
                  ) : (
                    <Route path="/dashboard" element={<Login />} />
                  )}
                  {FinSlnState.authenticated ? (
                    <Route path="/im" element={<InitialGrowthAssessment />} />
                  ) : (
                    <Route path="/im" element={<Login />} />
                  )}
                  {FinSlnState.authenticated ? (
                    <Route path="/terms" element={<TermsAndConditions />} />
                  ) : (
                    <Route path="/terms" element={<Login />} />
                  )}
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </FinSlnContext.Provider>
    </BrowserRouter>
  );
}

export default App;
