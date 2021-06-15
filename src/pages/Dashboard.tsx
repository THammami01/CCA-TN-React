import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "./partials/Sidebar";
import routes from "./main-content";
import "./Dashboard.scss";

const Dashboard: React.FC = () => {
  useEffect(() => {
    document.title = "CCA-TN ‣ Tableau de bord";
  }, []);

  return (
    <div className="container">
      <Sidebar />

      <Switch>
        {routes.map(({ path, component }) => (
          <Route exact key={path} path={path} component={component} />
        ))}
      </Switch>
    </div>
  );
};

export default Dashboard;
