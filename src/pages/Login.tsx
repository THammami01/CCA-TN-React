import { useContext, useEffect, memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { AppContext } from "../App";
import "./Login.scss";

const Login: React.FC = memo(() => {
  const history = useHistory();
  const { mainData, setMainData } = useContext(AppContext);

  useEffect(() => {
    document.title = "CCA-TN ‣ Connexion";
  }, []);

  const handleLogin = () => {
    const user = {
      id: "00000076",
      firstname: "Tarek",
      lastname: "Hammami",
      service: "Admin",
    };

    setMainData({ ...mainData, user });
    history.push("/dashboard");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="container">
      <div className="login">
        <img src="/assets/imgs/bg.jpg" alt="Background" />

        <form autoComplete="off">
          <img src="/assets/imgs/large-icon.png" alt="Logo" />

          <div>
            <label htmlFor="id">Identifiant:</label>
            <input
              id="id"
              type="text"
              placeholder="Entrer votre identifiant"
              autoFocus
              autoComplete="off"
              onKeyDown={handleKeyDown}
            />
          </div>

          <div>
            <label htmlFor="password">Mot de passe:</label>
            <input
              id="password"
              type="password"
              placeholder="Entrer votre mot de passe"
              autoComplete="off"
              onKeyDown={handleKeyDown}
            />
          </div>

          <div>
            <button type="button" onClick={handleLogin}>
              Se Connecter
            </button>
            <Link to="/login">Mot de passe oublié ?</Link>
          </div>

          <p
            className="error"
            title="Les identifiants que vous avez saisi sont incorrects."
          >
            Identifiants invalides.
          </p>
        </form>
      </div>
    </div>
  );
});

export default Login;
