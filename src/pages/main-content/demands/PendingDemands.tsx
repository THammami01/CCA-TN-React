import { useEffect } from "react";
import { IoDocuments } from "react-icons/io5";

const PendingDemands: React.FC = () => {
  useEffect(() => {
    document.title = "CCA-TN ‣ Demandes en attentes";
  }, []);

  return (
    <section className="main-content pending-demands">
      <h1>
        <IoDocuments /> Demandes en attentes
      </h1>
    </section>
  );
};

export default PendingDemands;
