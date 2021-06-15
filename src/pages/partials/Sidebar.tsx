import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { IoDocuments } from "react-icons/io5";
import { AiFillSetting } from "react-icons/ai";
import { useContext } from "react";
import { AppContext } from "../../App";

const Sidebar: React.FC = () => {
  const { setMainData } = useContext(AppContext);
  const [isOpened, setOpened] = useState({
    employees: false,
    demands: false,
  });
  const history = useHistory();

  const handleSidebarItemClick = (itemName: string) => {
    switch (itemName) {
      case "employees":
        setOpened({ demands: false, employees: !isOpened.employees });
        break;
      case "demands":
        setOpened({ employees: false, demands: !isOpened.demands });
        break;
    }
  };

  return (
    <section className="side-bar">
      <section>
        <Link to="/dashboard/" className="logo">
          <img src="/assets/imgs/large-icon.png" alt="CCA" />
        </Link>

        <Link to="/dashboard/profile">
          <div className="role">
            <label>
              <FaUserCircle />
              Tarek Hammami
            </label>
          </div>
        </Link>

        <div>
          <label onClick={() => handleSidebarItemClick("employees")}>
            <HiUsers /> Employés
          </label>
          <ul style={{ display: isOpened.employees ? "flex" : "none" }}>
            <Link to="/dashboard/see-all-employees">
              <li>Voir tous</li>
            </Link>
            <Link to="/dashboard/add-employee">
              <li>Ajouter</li>
            </Link>
            <Link to="/dashboard/update-employee">
              <li>Mettre à jour</li>
            </Link>
            <Link to="/dashboard/delete-employee">
              <li>Supprimer</li>
            </Link>
          </ul>
        </div>

        <div>
          <label onClick={() => handleSidebarItemClick("demands")}>
            <IoDocuments /> Demandes
          </label>

          <ul style={{ display: isOpened.demands ? "flex" : "none" }}>
            <Link to="/dashboard/pending-demands">
              <li>En attentes</li>
            </Link>
            <Link to="/dashboard/accepted-demands">
              <li>Acceptées</li>
            </Link>
            <Link to="/dashboard/not-accepted-demands">
              <li>Non acceptées</li>
            </Link>
          </ul>
        </div>

        <Link to="/dashboard/settings">
          <div className="settings">
            <label>
              <AiFillSetting /> Paramètres
            </label>
          </div>
        </Link>
      </section>
    </section>
  );
};

export default Sidebar;
