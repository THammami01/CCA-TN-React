import { useEffect } from "react";
import "./page.scss";

const Login: React.FC = () => {
  useEffect(() => {
    document.title = "CCA-TN ‣ Connexion";
  }, []);

  return (
    <div className="container">
      <h1>Connexion</h1>
    </div>
  );
};

export default Login;
