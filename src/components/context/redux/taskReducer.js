import { ADD_TASK, DELETE_TASK } from "../types";
let initialState = {
  tasks: [
    {
      id: 1, 
      executor: "Oleg",
      deadline: "01.04.2020",
      time: "08:00",
      description: "Soooo important task",
      comments: "I dismiss you, if you fall",
    },
    {
      id: 2,
      executor: "Anja",
      deadline: "01.04.2020",
      time: "10:00",
      description: "Soooo important task",
      comments: "Terrible task, why do I agree?",
    },
  ],
};
export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      let newTask = {
        id: 3,
        executor: action.executor,
        deadline: action.deadline,
        time: action.time,
        description: action.description,
        iteration: action.iteration,
        comments: action.comments,
      };
      return {
        ...state,
        tasks: [newTask, ...state.tasks],
      };
      // case DELETE_TASK:
      //   return {
      //     ...state,

      //   }
    default:
      return state;
  }
};

export const addTask = ({
  executor,
  deadline,
  time,
  description,
  comments,
}) => ({
  type: ADD_TASK,
  executor,
  deadline,
  time,
  description,
  comments,
});
