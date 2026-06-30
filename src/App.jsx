import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>App</div>
      </Router>
    </Provider>
  );
};

export default App;
