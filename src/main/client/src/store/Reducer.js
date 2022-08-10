export const initialState = {
  TechStack: [],
  Nation: null,
  EmployeeType: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case `Set${action.item}`:
      return { ...state, TechStack: [...state.TechStack, action.item] };
    case `Del${action.item}`:
      return {
        ...state,
        TechStack: [
          ...state.TechStack.filter((element) => element !== action.item),
        ],
      };
    case `SetInput`:
      return {
        ...state,
        Nation: action.nation,
        EmployeeType: action.employeeType,
      };
    default:
      return state;
  }
};
export default reducer;
