import { useEffect, useState } from "react";
import { HiUsers } from "react-icons/hi";
import { useHistory } from "react-router-dom";

interface EmployeeInt {
  id: number;
  firstname: string;
  lastname: string;
  service: string;
}

const SeeAllEmployees: React.FC = () => {
  const [page, setPage] = useState(1);
  const [employees, setEmployees] = useState<EmployeeInt[]>([]);
  const history = useHistory();

  const getEmployees = (page = 1) => {
    window.scrollTo(0, 0);

    const tempEmployees = [];
    const firstIdx = (page - 1) * 15 + 1;
    const lastIdx = firstIdx + 15;

    for (let i = firstIdx; i < lastIdx; i++) {
      tempEmployees.push({
        id: i,
        firstname: "Tarek",
        lastname: "Hammami",
        service: "RH",
      });
    }

    return tempEmployees;
  };

  useEffect(() => {
    document.title = "CCA-TN ‣ Tous les employés";
    setEmployees(getEmployees());
  }, []);

  const goToPrevPage = () => {
    setEmployees(getEmployees(page - 1));
    setPage(page - 1);
  };

  const goToNextPage = () => {
    setEmployees(getEmployees(page + 1));
    setPage(page + 1);
  };

  const handleEmployeeClick = (id: number) => {
    history.push(`/dashboard/update-employee?id=${id}`);
  };

  return (
    <section className="main-content see-all-employees">
      <h1>
        <HiUsers /> Tous les employés
      </h1>

      <table>
        <thead>
          <tr>
            <th>Identifiant</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Service</th>
          </tr>
        </thead>

        <tbody>
          {employees.map(({ id, firstname, lastname, service }) => (
            <tr key={id} onClick={() => handleEmployeeClick(id)}>
              <td>{id}</td>
              <td>{lastname}</td>
              <td>{firstname}</td>
              <td>{service}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          className={page === 1 ? "disabled" : ""}
          onClick={goToPrevPage}
          disabled={page === 1 ? true : false}
        >
          Page précédente
        </button>
        <p>Page {page}</p>
        <button onClick={goToNextPage}>Page suivante</button>
      </div>
    </section>
  );
};

export default SeeAllEmployees;
