import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Event from "./features/Events/containers/Event";
import Events from "./features/Events/containers/Events";

interface Props {}

const App: React.FunctionComponent<Props> = () => {
  return (
    <div>
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
    </div>
  );
};

export default App;
