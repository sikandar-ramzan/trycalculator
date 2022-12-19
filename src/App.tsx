import React, { useState } from "react";
import "./App.css";
import { BsPower, BsBackspace } from "react-icons/bs";
function App() {
  const [inputs, setInputs] = useState("");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState(true);
  const ops = ["*", "+", "/", "-", "%"];

  const UpdateCalc = (value: any) => {
    if (
      (ops.includes(value) && inputs === "") ||
      (ops.includes(value) && ops.includes(inputs.slice(-1)))
    ) {
      return;
    } else if (ops.includes(value) && inputs.includes(inputs.slice(-1))) {
      output === "" ? setInputs(inputs + value) : setInputs(output + value);
      console.log(output !== "");
      console.log(ops.includes(value));
      console.log(inputs.slice(-1));
    } else if (inputs.length <= 15) {
      setInputs(inputs + value);
    } else setOutput("Maximum characters Entered");
  };

  const ClearDigits = () => {
    if (inputs === "") {
      return;
    } else if (output !== "") {
      setOutput("");
    } else if (output === "") {
      const value = inputs.slice(0, -1);
      setInputs(value);
    }
  };

  const Calculate = (value: any) => {
    setOutput(eval(inputs).toString());
  };
  const TurnOnOff = () => {
    if (status === true) {
      setStatus(false);
    } else {
      setStatus(true);
      setInputs("");
      setOutput("");
    }
  };

  return (
    <>
      <div className="container">
        <div className="display">
          <div className="input">{inputs || ""}</div>
          <div className="output">
            {" "}
            <span>{output}</span>{" "}
          </div>
        </div>
        <div className="button_container">
          <button className="buttons" onClick={TurnOnOff}>
            <span>
              <BsPower color={status ? "red" : "green"} />
            </span>
          </button>
          <button
            className="buttons"
            onClick={() => UpdateCalc("/")}
            disabled={status}
          >
            /
          </button>
          <button
            className="buttons"
            onClick={() => UpdateCalc("%")}
            disabled={status}
          >
            %
          </button>
          <button
            className="buttons"
            onClick={() => UpdateCalc("*")}
            disabled={status}
          >
            x
          </button>
          <button
            className="buttons"
            onClick={() => UpdateCalc("-")}
            disabled={status}
          >
            -
          </button>
          <button
            className="buttons"
            onClick={() => UpdateCalc("+")}
            disabled={status}
          >
            +
          </button>
          <button
            className="buttons"
            onClick={() => UpdateCalc("7")}
            disabled={status}
            value={7}
          >
            7
          </button>
          <button
            className="buttons"
            onClick={() => UpdateCalc("8")}
            disabled={status}
            value={8}
          >
            8
          </button>
          <button
            className="buttons"
            onClick={() => UpdateCalc("9")}
            disabled={status}
            value={9}
          >
            9
          </button>
          <button
            className="buttons"
            onClick={() => UpdateCalc("4")}
            disabled={status}
            value={4}
          >
            4
          </button>
          <button
            className="buttons"
            onClick={() => UpdateCalc("5")}
            disabled={status}
            value={5}
          >
            5
          </button>
          <button
            className="buttons"
            onClick={() => UpdateCalc("6")}
            disabled={status}
            value={6}
          >
            6
          </button>
          <button
            className="buttons"
            onClick={() => UpdateCalc("1")}
            disabled={status}
            value={1}
          >
            1
          </button>
          <button
            className="buttons"
            onClick={() => UpdateCalc("2")}
            disabled={status}
            value={2}
          >
            2
          </button>
          <button
            className="buttons"
            onClick={() => UpdateCalc("3")}
            disabled={status}
            value={3}
          >
            3
          </button>
          <button
            className="buttons"
            value="clear"
            onClick={ClearDigits}
            disabled={status}
          >
            <BsBackspace />
          </button>
          <button
            className="buttons "
            onClick={() => UpdateCalc("0")}
            disabled={status}
            value={0}
          >
            0
          </button>
          <button className="buttons" value="=" onClick={Calculate}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
