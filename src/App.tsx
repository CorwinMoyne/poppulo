import * as React from "react";
import Events from "./features/Events/containers/Events";

interface Props {}

const App: React.FunctionComponent<Props> = () => {
  // React.useEffect(() => {
  //   const response = require("./results.json");
  //   const results = response.result.event;
  //   console.log(results);
  // }, []);
  return (
    <div>
      <Events />
    </div>
  );
};

export default App;
