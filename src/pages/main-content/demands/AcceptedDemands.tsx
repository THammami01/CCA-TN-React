import { useEffect } from "react";
import { IoDocuments } from "react-icons/io5";

const AcceptedDemands: React.FC = () => {
  useEffect(() => {
    document.title = "CCA-TN ‣ Demandes acceptées";
  }, []);

  return (
    <section className="main-content accepted-demands">
      <h1>
        <IoDocuments /> Demandes acceptées
      </h1>
    </section>
  );
};

export default AcceptedDemands;
