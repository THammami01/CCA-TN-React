import { useEffect, useState } from "react";
import {HiUsers} from "react-icons/hi"

const AddEmployee: React.FC = () => {
  const [user, setUser] = useState({
    id: "",
    firstname: "",
    lastname: "",
    password: "",
    service: "",
  });

  useEffect(() => {
    document.title = "CCA-TN ‣ Ajout d'un employé";
  }, []);

  const handleInputs = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  return (
    <section className="main-content add-employee">
      <h1>
        <HiUsers /> Ajout d'un nouveau employé
      </h1>

      <form>
        <div>
          <label htmlFor="id">Identifiant:</label>
          <input
            id="id"
            type="text"
            placeholder="Entrer l'identifiant de l'employé"
            value={user.id}
            onChange={handleInputs}
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
            placeholder="Entrer le mot de passe de l'employé"
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
          <button type="button">Ajouter</button>
          <button type="reset">Réinitialiser</button>
        </div>
      </form>
    </section>
  );
};

export default AddEmployee;
