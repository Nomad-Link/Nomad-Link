export const initialState = {
  nation: null,
  role: null,
  employeeType: null,
  searchParams: null, // => techStack
  techStack: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case `SetInputDev`:
      return {
        ...state,
        nation: action.nation,
        employeeType: action.employeeType,
        searchParams: action.searchParams,
      };
    case `SetInputEnt`:
      return {
        ...state,
        role: action.role,
        employeeType: action.employeeType,
      };
    case `SaveStack`:
      return { ...state, techStack: [...state.techStack, action.item] };
    case `DelStack`:
      const indexB = state.techStack.findIndex(
        (techStackItem) => techStackItem === action.item
      );
      let newtechStack = [...state.techStack];
      newtechStack.splice(indexB, 1);
      return {
        ...state,
        techStack: newtechStack,
      };
    case `DelStackAll`:
      return { ...state, techStack: [] };
    default:
      return state;
  }
};
export default reducer;
