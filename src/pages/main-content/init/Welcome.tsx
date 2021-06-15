import { useContext } from "react";
import { useState, useEffect } from "react";
import { RiDashboardFill } from "react-icons/ri";
import { AppContext } from "../../../App";

const Welcome: React.FC = () => {
  const { mainData } = useContext(AppContext);
  const [welcomeMsg, setWelcomeMsg] = useState("Bonjour");

  useEffect(() => {
    const hour = new Date().getHours();

    document.title = "CCA-TN ‣ Tableau de bord";

    if (hour > 3 && hour < 12) setWelcomeMsg("Bonjour");
    else if (hour >= 12 && hour < 20) setWelcomeMsg("Bon après-midi");
    else setWelcomeMsg("Bonsoir");
  }, []);

  return (
    <section className="main-content welcome">
      <h1>
        <RiDashboardFill /> {welcomeMsg} {mainData?.user?.firstname}, bienvenue
        sur le tableau de bord.
      </h1>

      <h4>Lorem ipsum dolor sit amet,</h4>

      <p>
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
  );
};

export default Welcome;
