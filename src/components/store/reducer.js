import * as actionTypes from "./actions";

const initialState = {
  username: null,
  jwt: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.personData.name,
        age: action.personData.age,
      };
      return {
        ...state,
        persons: state.persons.concat(newPerson),
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        jwt: action.payload.jwt,
        // persons: state.persons.filter(
        //   (person) => person.id !== action.personId
        // ),
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        username: null,
        jwt: null,
      };
    default:
      return state;
  }
};

export default reducer;
