import React from "react";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { FinSlnContext } from "../App";
const WelcomePage = () => {
  let navigate = useNavigate();
  // let [FinSlnState, setFinSlnState] = useContext(FinSlnContext);
  let handleReserve = () => {
    navigate("./dashboard");
    // alert(JSON.stringify(FinSlnState));
    // setFinSlnState({ ...FinSlnState, FinSln: "hello worlf" });
  };

  const handleBusinessChallenges = () => {
    navigate("./challenges");
  };

  return (
    <div className="welcome">
      <h1>Welcome</h1>
      <p className="">
        We are dedicated to helping businesses achieve growth and success. Our
        team of experts in accounting and finance is here to support you on your
        journey to reaching your business goals.
      </p>
      <p>
        Please complete the Business Insight to provide us with valuable
        insights into your business goals, challenges, financial situation, and
        expectations, enabling us to offer customized solutions to drive your
        business growth and success. This is Important so that we can better
        understand your needs and provide you with the best possible services.
        To find out what business could need click{" "}
        <span onClick={handleBusinessChallenges}>HERE</span>
      </p>
      <p>
        Welcome to our platform, where business growth takes center stage. At
        our core, we're dedicated to elevating businesses to new heights. How do
        we accomplish this? By providing an array of meticulously crafted growth
        products and strategies meticulously designed to target every aspect of
        expansion: from amplifying revenue and boosting profits, to seizing
        market share, enhancing market presence, and optimizing efficiency and
        productivity. But this is just the beginning. As you navigate our site,
        you'll uncover a world of opportunities, each carefully tailored to
        supercharge your business journey. Whether you're looking to scale your
        operations, dominate your niche, or establish an unshakable market
        foothold, we've got you covered. Don't just stop here – dive deeper and
        explore. Let our offerings and insights ignite your ambition. Register
        with us today, and empower your business to surge ahead. Your success
        story starts now.
      </p>
      <p>
        If you have any questions or would like to schedule a consultation, feel
        free to reach out to us. We look forward to working with you!
      </p>
      <button className="initial-meeting" onClick={handleReserve}>
        Start Business Growth
      </button>
    </div>
  );
};

export default WelcomePage;
