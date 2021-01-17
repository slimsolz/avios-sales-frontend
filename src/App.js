import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ReactQueryConfigProvider } from "react-query";
import "./App.css";

const Login = lazy(() => import("./pages/Auth/Login/Login"));
const Register = lazy(() => import("./pages/Auth/Register/Register"));

const queryConfig = { queries: { refetchOnWindowFocus: false } }; // This disables background refresh

function App() {
  return (
    <Router>
      <ReactQueryConfigProvider config={queryConfig}>
        <div>
          <Suspense fallback="">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </Suspense>
        </div>
      </ReactQueryConfigProvider>
    </Router>
  );
}

export default App;
