import { useEffect } from "react";
import { IoDocuments } from "react-icons/io5";

const NotAcceptedDemands: React.FC = () => {
  useEffect(() => {
    document.title = "CCA-TN ‣ Demandes non acceptées";
  }, []);

  return (
    <section className="main-content not-accepted-demands">
      <h1>
        <IoDocuments /> Demandes non acceptées
      </h1>
    </section>
  );
};

export default NotAcceptedDemands;
