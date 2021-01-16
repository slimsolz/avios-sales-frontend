import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

const Layout = lazy(() => import("./components/Layout/Layout"));

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <div>
          <Suspense fallback="">
            <Switch>
              <Route exact path="/" component={Layout} />
            </Switch>
          </Suspense>
        </div>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
