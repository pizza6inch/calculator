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

  return (
    <>
      <button onClick={() => setObj({ name: "pizza", age: 21 })}>
        click me!
      </button>
      {obj && (
        <div>
          <div className="name">{`Name: ${obj?.name}`}</div>
          <div className="age">{`Age:${obj?.age}`}</div>
        </div>
      )}
    </>
  );
};

export default App;
