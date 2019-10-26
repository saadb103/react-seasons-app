import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import useLocation from "./useLocation";

const App = () => {
  const [lat, errorMessage] = useLocation();
  let content;
  if (errorMessage && !lat) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat && !errorMessage) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message="Please allow location" />;
  }

  return <div className="border red">{content}</div>;
};

export default App;
