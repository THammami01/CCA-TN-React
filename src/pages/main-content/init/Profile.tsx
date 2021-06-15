import { useContext, useEffect, memo } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../../App";

const Profile: React.FC = memo(() => {
  const { mainData, setMainData } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    document.title = "CCA-TN ‣ Profil";
  }, []);

  const handleLogout = () => {
    setMainData({});
    history.push("/login");
  };

  return (
    <section className="main-content profile">
      <h1>
        <FaUserCircle />
        Profil
      </h1>

      <div>
        <img
          src="/assets/imgs/profile-logo.png"
          alt="Profile"
          width="200px"
          height="200px"
        />

        <div>
          <p>Identifiant: {mainData?.user?.id}</p>
          <p>Nom: {mainData?.user?.lastname}</p>
          <p>Prénom: {mainData?.user?.firstname}</p>
          <p>Service: {mainData?.user?.service}</p>
        </div>
      </div>

      <button className="log-out" onClick={handleLogout}>
        <IoLogOut />
        Se déconnecter
      </button>
    </section>
  );
});

export default Profile;
