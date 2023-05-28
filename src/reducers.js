import { ADD_TODO, TOGGLE_TODO } from './actions';

const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    case TOGGLE_TODO:
      const { index } = action.payload;
      const todos = [...state.todos];
      todos[index].completed = !todos[index].completed;
      return {
        todos,
      };
    default:
      return state;
  }
};
