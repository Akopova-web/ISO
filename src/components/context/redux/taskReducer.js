import { ADD_TASK } from "../types";
let initialState = {
  tasks: [
    {
      executor: "Oleg",
      deadline: "01.04.2020",
      time: "08:00",
      description: "Soooo important task",
      iteration: 3,
      comments: "I dismiss you, if you fall",
    },
    {
      executor: "Anja",
      deadline: "01.04.2020",
      time: "10:00",
      description: "Soooo important task",
      iteration: 2,
      comments: "Terrible task, why do I agree?",
    },
  ],
  newTask: {},
};
export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        newTask: [action.newTask],
      };
    default:
      return state;
  }
};

export const addTask = (newTask) => ({
  type: ADD_TASK,
  newTask,
});
