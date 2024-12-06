import { Link } from "react-router-dom";
import Card from "../Components/Card"; 
import {useDentistStates} from '../Components/utils/context'
const HomePage = () => {
  const {state : data} = useDentistStates();

  return (
    <div className="home-page">
      <h1>Lista de Dentistas</h1>
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
