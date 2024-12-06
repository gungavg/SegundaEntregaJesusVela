import { Link } from "react-router-dom";
import Card from "../Components/Card"; 
import {useDentistStates} from '../Components/utils/context'
import "../styles/homepage.css";

const HomePage = () => {
  const {state : data} = useDentistStates();

  return (
    <div className="home-page">
      <h1 className="page-title">Lista de Dentistas</h1>
      <div className="grid-container">
        {data.data.map((dentist) => (
          <Card
            key={dentist.id}
            data={dentist}
          /> 
        ))}
      </div>
    </div>
  );
};

export default HomePage;
