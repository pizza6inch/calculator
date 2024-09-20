import BasicComponent from "./component/BasicComponent";
import { ReactNode, useState } from "react";

import "./App.css";

type AppProps = {
  name: string;
  age: number;
  children?: ReactNode;
};
type obj = {
  name: string;
  age: number;
};

const App = ({ name, age }: AppProps): ReactNode => {
  const [obj, setObj] = useState<obj>();
  const [numberDisplay, setNumberDisplay] = useState<number>(0);
  const [result, setResult] = useState<number>();
  const buttons = [
    { label: "AC", color: "red", type: "clear" },
    { label: "( )", color: "gray", type: "parentheses" },
    { label: "%", color: "gray", type: "operater" },
    { label: "/", color: "gray", type: "operater" },
    { label: "7", color: "none", type: "number" },
    { label: "8", color: "none", type: "number" },
    { label: "9", color: "none", type: "number" },
    { label: "X", color: "gray", type: "operater" },
    { label: "4", color: "none", type: "number" },
    { label: "5", color: "none", type: "number" },
    { label: "6", color: "none", type: "number" },
    { label: "-", color: "gray", type: "operater" },
    { label: "1", color: "none", type: "number" },
    { label: "2", color: "none", type: "number" },
    { label: "3", color: "none", type: "number" },
    { label: "+", color: "gray", type: "operater" },
    { label: "0", color: "none", type: "number" },
    { label: ".", color: "none", type: "number" },
    { label: "<=", color: "none", type: "delete" },
    { label: "=", color: "blue", type: "equal" },
  ];

  const handleButton = ({
    label,
    color,
    type,
  }: {
    label: string;
    color: string;
    type: string;
  }) => {
    switch (type) {
      case "number":
        setNumberDisplay(Number(`${numberDisplay}${label}`));
        break;
      case "operater":
        break;
      case "parentheses":
        break;
      case "clear":
        setNumberDisplay(0);
        break;
      case "delete":
        setNumberDisplay(Number(numberDisplay.toString().slice(0, -1)));
        break;
      case "equal":
        setResult(numberDisplay);
        break;
      default:
        break;
    }
  };

  const handleColor = (color: string): string => {
    switch (color) {
      case "red":
        return "button buttonRed";
      case "gray":
        return "button buttonGray";
      case "blue":
        return "button buttonBlue";
      default:
        return "button";
    }
  };

  return (
    <div className="layout">
      {/* input */}
      <div className="numberDisplay">
        <span>{numberDisplay}</span>
      </div>
      {/* input */}
      {/* keyboard */}
      <div className="keyboard">
        {buttons.map((button) => (
          <div
            className={handleColor(button.color)}
            onClick={() => handleButton(button)}
            key={button.label}
          >
            {button.label}
          </div>
        ))}
      </div>
      {/* keyboard */}
    </div>
  );
};

export default App;
