import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App wotfard">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
