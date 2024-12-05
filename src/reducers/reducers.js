export const reducer = (state, action) => {
    switch (action.type) {
      case "GET_DENTIST":
        return { ...state, data: action.payload };
      case "CHANGE_THEME":
        return { };
      default:
        throw new Error("Acción no existente");
    }
  };