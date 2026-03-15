export const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  DELETE_TODO: "DELETE_TODO",
  EDIT_TODO: "EDIT_TODO",
  CLEAR_DONE: "CLEAR_DONE",
  LOAD_TODOS: "LOAD_TODOS",
  REORDER_TODO: "REORDER_TODO",
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOAD_TODOS:
      return action.payload;

    case ACTIONS.ADD_TODO:
      if (!action.payload.text.trim()) return state;

      return [
        ...state,
        {
          id: Date.now().toString(),
          text: action.payload.text,
          done: false,
          dueDate: action.payload.dueDate,
          createdAt: new Date().toISOString(),
        },
      ];

    case ACTIONS.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo,
      );

    case ACTIONS.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);

    case ACTIONS.CLEAR_DONE:
      return state.filter((todo) => !todo.done);

    case ACTIONS.REORDER_TODO:
      return action.payload;

    default:
      return state;
  }
};
