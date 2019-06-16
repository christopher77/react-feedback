import React from "react";
import PeersContext from "./context";

function Resumen({ feedback }) {
  const userLoged = React.useContext(PeersContext);
  return (
    <>
      <h3>Thanks {userLoged}, your feedback is</h3>
      {feedback.map((element, index) => (
        <ul key={index}>
          <li>name: {element.name}</li>
          <li>work together: {element.workTogether}</li>
          <li>reason: {element.reason}</li>
        </ul>
      ))}
    </>
  );
}
export default Resumen;
