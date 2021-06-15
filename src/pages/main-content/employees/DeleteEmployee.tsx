import { useEffect, useState } from "react";
import {HiUsers} from "react-icons/hi"

const DeleteEmployee: React.FC = () => {
  const [idToSearch, setIdToSearch] = useState("");
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [user] = useState({
    id: "00000076",
    firstname: "Tarek",
    lastname: "Hammami",
    password: "",
    service: "Admin",
  });

  useEffect(() => {
    document.title = "CCA-TN ‣ Suppression d'un employé";
  }, []);

  const handleIdToSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdToSearch(e.target.value);
  };

  const handleValidate = () => {
    setShowDeleteForm(!showDeleteForm);
  };

  return (
    <section className="main-content delete-employee">
      <h1>
        <HiUsers /> Suppression d'un employé
      </h1>

      {!showDeleteForm && (
        <form>
          <div>
            <label htmlFor="id">Identifiant:</label>
            <input
              id="id"
              type="text"
              placeholder="Entrer l'identifiant de l'employé à supprimer"
              value={idToSearch}
              onChange={handleIdToSearch}
            />
          </div>

          <div className="btns">
            <button type="button" onClick={handleValidate}>
              Valider
            </button>
          </div>
        </form>
      )}

      {showDeleteForm && (
        <form className="delete-form">
          <div>
            <label htmlFor="id">Identifiant:</label>
            <input id="id" type="text" value={user.id} disabled />
          </div>

          <div>
            <label htmlFor="lastname">Nom:</label>
            <input id="lastname" type="text" value={user.lastname} disabled />
          </div>

          <div>
            <label htmlFor="firstname">Prénom:</label>
            <input id="firstname" type="text" value={user.firstname} disabled />
          </div>

          <div>
            <label htmlFor="service">Service:</label>
            <select id="service" size={2} disabled>
              <option value="Admin" selected={user.service === "Admin"}>
                Admin
              </option>
              <option value="Admin" selected={user.service === "RH"}>
                RH
              </option>
            </select>
          </div>

          <div className="btns">
            <button type="button" className="delete-btn">
              Supprimer
            </button>
            <button type="button" onClick={handleValidate}>
              Retourner
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default DeleteEmployee;
