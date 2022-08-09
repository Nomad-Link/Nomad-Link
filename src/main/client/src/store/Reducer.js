export const initialState = {
  techStack: ["delectus aut autem"],
};

const reducer = (state, action) => {
  switch (action.type) {
    case `Set${action.item}`:
      return { ...state, techStack: [...state.techStack, action.item] };
    case `Del${action.item}`:
      return {
        ...state,
        techStack: [...state.techStack.filter((element) => element !== action.item)],
      };
    default:
      return state;
  }
};
export default reducer;
