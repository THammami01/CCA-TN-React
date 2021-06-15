import { useEffect } from "react";
import { AiFillSetting } from "react-icons/ai";

const Settings: React.FC = () => {

  useEffect(() => {
    document.title = "CCA-TN ‣ Paramètres";
  }, []);

  return (
    <section className="main-content settings">
      <h1>
        <AiFillSetting />
        Paramètres
      </h1>
    </section>
  );
};

export default Settings;
