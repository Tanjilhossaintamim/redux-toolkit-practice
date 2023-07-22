import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MainComponents from "./components/MainComponents";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <MainComponents />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
