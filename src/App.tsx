import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

interface AppContextInt {
  mainData?: null | {
    user?: { id: number, firstname: string; lastname: string; service: string };
  };
  setMainData?: any;
}

export const AppContext = createContext<AppContextInt>({});

const App: React.FC = () => {
  const [mainData, setMainData] = useState({});

  return (
    <AppContext.Provider value={{ mainData, setMainData }}>
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    </AppContext.Provider>
  );
};

export default App;
