export const initialState = {
  nation: null,
  employeeType: null,
  searchParams: null,
  techStacks: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case `Set${action.name}`:
      return { ...state, techStacks: [...state.techStacks, action.item] };
    case `Del${action.name}`:
      const index = state.techStacks.findIndex(
        (techStacksItem) => techStacksItem.techName === action.name
      );
      let newtechStacks = [...state.techStacks];
      newtechStacks.splice(index, 1);
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
    default:
      return state;
  }
};
export default reducer;
