import React, { useEffect, useState } from "react";
import { HiUsers } from "react-icons/hi";
import { useHistory, useLocation } from "react-router-dom";

const UpdateEmployee: React.FC = () => {
  const [idToSearch, setIdToSearch] = useState("");
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [user, setUser] = useState({
    id: "00000076",
    firstname: "Tarek",
    lastname: "Hammami",
    password: "",
    service: "Admin",
  });
  const search = useLocation().search;
  const history = useHistory();

  useEffect(() => {
    document.title = "CCA-TN ‣ Mise à jour d'un employé";
    const idParam = new URLSearchParams(search).get("id");
    setIdToSearch(idParam || "");
    setShowDeleteForm(idParam ? true : false);
  }, []);

  const handleIdToSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdToSearch(e.target.value);
  };

  const handleInputs = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleValidate = () => {
    setShowDeleteForm(!showDeleteForm);
    if (showDeleteForm) {
      history.push("/dashboard/update-employee");
    }
  };

  return (
    <section className="main-content update-employee">
      <h1>
        <HiUsers />
        Mise à jour des details d'un employé
      </h1>

      {!showDeleteForm && (
        <form>
          <div>
            <label htmlFor="id">Identifiant:</label>
            <input
              id="id"
              type="text"
              placeholder="Entrer l'identifiant de l'employé à mettre à jour"
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
        <form>
          <div>
            <label htmlFor="id">Identifiant:</label>
            <input
              id="id"
              className="id-input"
              type="text"
              value={idToSearch || user.id}
              disabled
            />
          </div>

          <div>
            <label htmlFor="lastname">Nom:</label>
            <input
              id="lastname"
              type="text"
              placeholder="Entrer le nom de l'employé"
              value={user.lastname}
              onChange={handleInputs}
            />
          </div>

          <div>
            <label htmlFor="firstname">Prénom:</label>
            <input
              id="firstname"
              type="text"
              placeholder="Entrer le prénom de l'employé"
              value={user.firstname}
              onChange={handleInputs}
            />
          </div>

          <div>
            <label htmlFor="password">Mot de passe:</label>
            <input
              id="password"
              type="password"
              placeholder="Entrer le nouveau mot de passe de l'employé"
              value={user.password}
              onChange={handleInputs}
            />
          </div>

          <div>
            <label htmlFor="service">Service:</label>
            <select id="service" size={2} onChange={handleInputs}>
              <option value="Admin" selected={user.service === "Admin"}>
                Admin
              </option>
              <option value="Admin" selected={user.service === "RH"}>
                RH
              </option>
            </select>
          </div>

          <div className="btns">
            <button type="button">Mettre à jour</button>
            <button type="reset">Réinitialiser</button>
            <button type="button" onClick={handleValidate}>
              Retourner
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default UpdateEmployee;
