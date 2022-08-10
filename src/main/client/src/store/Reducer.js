export const initialState = {
  techStacks: [],
  nation: null,
  employeeType: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case `Set${action.item}`:
      return { ...state, techStacks: [...state.techStacks, action.item] };
    case `Del${action.item}`:
      return {
        ...state,
        techStacks: [
          ...state.techStacks.filter((element) => element !== action.item),
        ],
      };
    case `SetInput`:
      return {
        ...state,
        nation: action.nation,
        employeeType: action.employeeType,
      };
    default:
      return state;
  }
};
export default reducer;