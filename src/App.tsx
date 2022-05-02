import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingAsync from "./components/LoadingAsync/LoadingAsync";
import { Box } from "./components/styles/Box";
import Event from "./features/Events/containers/Event";
import Events from "./features/Events/containers/Events";

interface Props {}

const App: React.FunctionComponent<Props> = () => {
  return (
    <Box mt="3em">
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="event" element={<Event />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <LoadingAsync />
    </Box>
  );
};

export default App;
