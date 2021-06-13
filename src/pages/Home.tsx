import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    history.push("/login");
  }, []);

  return <></>;
};

export default Home;
