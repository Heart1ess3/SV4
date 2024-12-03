import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Cards from "./components/Cards/Cards";
import './i18n'; 
import Buttons from "./components/Buttons/Buttons";
import MorePage from "./components/MorePage/MorePage";
import ChoosePage from "./components/ChoosePage/ChoosePage";
import LearnMorePage from "./components/LearnMorePage/LearnMorePage"; 

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h1>My Project</h1>
                  <Cards />
                  <Buttons/>
                </>
              }
            />
            <Route path="/more" element={<MorePage />} />
            <Route path="/choose" element={<ChoosePage />} />
            <Route path="/learn-more" element={<LearnMorePage />} /> 
          </Routes>
        </Router>
      </div>
    </Provider>
  );
};

export default App;