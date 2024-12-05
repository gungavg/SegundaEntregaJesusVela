import { createContext,useReducer,useContext,useEffect } from "react";
import axios from "axios";

import {reducer} from '../../reducers/reducers'
export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = 'https://jsonplaceholder.typicode.com/users'
  useEffect(() => {

    axios(url).then((res)=>{
      dispatch({type: "GET_DENTIST",payload: res.data})
    }).catch((err)=>{console.log(err);})
  }, []);

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider;

export const useDentistStates = () => useContext(ContextGlobal);
