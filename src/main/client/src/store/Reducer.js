export const initialState = {
  nation: null,
  employeeType: null,
  searchParams: null, // => techStack
  techStacks: [],
  techStack: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case `Set${action.name}`:
      return {
        ...state,
        techStacks: [...state.techStacks, { techName: action.item }],
      };
    case `Del${action.name}`:
      const indexA = state.techStacks.findIndex(
        (techStacksItem) => techStacksItem.techName === action.name
      );
      let newtechStacks = [...state.techStacks];
      newtechStacks.splice(indexA, 1);
      return {
        ...state,
        techStacks: newtechStacks,
      };
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
