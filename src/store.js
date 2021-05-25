let store = {
  _state: {
    tasksPage: {
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
    },
  },
  getState() {
    return this._state;
  }
};
export default store;