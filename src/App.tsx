import * as React from "react";
import { Box } from "./components/styles/Box";

interface Props {}

const App: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <Box bg="red">test</Box>
    </div>
  );
};

export default App;
