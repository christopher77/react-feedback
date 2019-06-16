import React from "react";
import Welcome from "./welcome";
import Feedback from "./feedback";

import { Provider as PeerContext } from "./context";
import Resumen from "./resumen";

function App() {
  const [user, setUser] = React.useState("");
  const [feedback, setFeedback] = React.useState([]);

  if (!user)
    return (
      <>
        <h1>Who are you?</h1>
        <Welcome setUser={setUser} />
      </>
    );

  if (feedback.length < 3)
    return (
      <>
        <h1>Give your feedback</h1>
        <Feedback setFeedback={setFeedback} feedback={feedback} />
      </>
    );
  return (
    <PeerContext value={user}>
      <Resumen feedback={feedback} />
    </PeerContext>
  );
}

export default App;
