export const initialState = {
  nation: null,
  employeeType: null,
  searchParams: null, // => techStack
  techStacks: [],
  techStack: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case `SetInput`:
      return {
        ...state,
        nation: action.nation,
        employeeType: action.employeeType,
        searchParams: action.searchParams,
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
    default:
      return state;
  }
};
export default reducer;
