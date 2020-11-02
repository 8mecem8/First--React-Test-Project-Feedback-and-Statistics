import "./App.css";
import React, { useState } from "react";

const Button = (props) => {
  return <button onClick={props.butfunc}>{props.text}</button>;
};

const StaElemnt = (props) => (
  <p>
    {props.text} {props.value}
  </p>
);

const Static = (props) => {
  if (props.bad + props.neutral + props.good >= 1) {
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <StaElemnt text="Good:" />
              </td>
              <td>
                <StaElemnt value={props.good} />
              </td>
            </tr>

            <tr>
              <td>
                <StaElemnt text="Neutral:" />
              </td>
              <td>
                <StaElemnt value={props.neutral} />
              </td>
            </tr>

            <tr>
              <td>
                <StaElemnt text="Bad:" />
              </td>
              <td>
                <StaElemnt value={props.bad} />
              </td>
            </tr>

            <tr>
              <td>
                <p>All:</p>
              </td>
              <td>
                <p>{props.bad + props.neutral + props.good}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>Percentage of Positive:</p>
              </td>
              <td>
                <p>
                  {Math.floor(
                    (props.good / (props.bad + props.neutral + props.good)) *
                      100
                  )}
                  %
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return <div>No Feedback Given </div>;
};

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const Goodfun = () => setGood(good + 1);
  const Neufun = () => setNeutral(neutral + 1);
  const Badfun = () => setBad(bad + 1);

  return (
    <div className="Main">
      <h1>Rate Us !!</h1>

      <Button butfunc={Goodfun} text="Good" />
      <Button butfunc={Neufun} text="Neutral" />
      <Button butfunc={Badfun} text="Bad" />

      <Static good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
