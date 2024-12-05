import { Link } from "react-router-dom";
import Card from "../Components/Card"; 
import {useDentistStates} from '../Components/utils/context'
const HomePage = () => {
  const {state} = useDentistStates();

  return (
    <div className="home-page">
      <h1>Lista de Dentistas</h1>
      <div className="grid-container">
        {state.data.map(dentist => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          /> 
        ))}
      </div>
    </div>
  );
};

export default HomePage;
