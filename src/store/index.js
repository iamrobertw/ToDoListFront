import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import axios from "axios";
export default new Vuex.Store({
  state: {
    appTitle: process.env.VUE_APP_TITLE,
    appTitleOne: process.env.VUE_APP_TITLE_ONE,
    appTitleSecond: process.env.VUE_APP_TITLE_SECOND,
    search: null,
    tasks: [],
    snackbar: {
      show: false,
      text: "",
    },
    sorting: false,
  },

  getters: {
    tasksFiltered(state) {
      if (!state.search) {
        return state.tasks;
      }
      return state.tasks.filter((task) =>
        task.title.toLowerCase().includes(state.search.toLowerCase())
      );
    },
  },
  mutations: {
    setSearch(state, value) {
      state.search = value;
    },
    getSqlData(state, sqlData) {
      state.tasks = sqlData;
    },
    addTask(state, newTask) {
      console.log(newTask);
      state.tasks.push(newTask);
      console.log(newTask);
    },
    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.id = id;
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    updateTaskTitle(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.title = payload.title;
    },
    updateTaskDueDate(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.dueDate = payload.dueDate;
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    showSnackbar(state, text) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = text;
      }, timeout);
    },
    hideSnackbar(state) {
      state.snackbar.show = false;
    },
    toggleSorting(state) {
      state.sorting = !state.sorting;
    },
  },
  actions: {
    async addTask({ commit }, newTaskTitle) {
      let newTask = {
        title: newTaskTitle,
        done: false,
        dueDate: new Date(),
        addedDate: new Date(),
      };
      const baseURL = "https://localhost:7257/api/ToDo";
      await axios
        .post(baseURL, {
          title: newTaskTitle,
          done: false,
          dueDate: new Date(),
          addedDate: new Date(),
        })
        .then((res) => {
          commit("addTask", newTask);
          commit("showSnackbar", "Task added!");
        })
        .catch((err) => console.log(err));
    },

    async doneTask({ state, commit }, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      const baseURL = "https://localhost:7257/api/ToDo/";
      await axios
        .put(baseURL, {
          id: id,
          title: task.title,
          done: !task.done,
          dueDate: task.dueDate,
          addedDate: task.addedDate,
          updatedDate: task.updatedDate,
          doneDate: task.doneDate,
        })
        .then((res) => {
          commit("doneTask", id);
          if (!task.done) {
            commit("showSnackbar", "Task restored!");
          } else {
            commit("showSnackbar", "Task done!");
          }
        })
        .catch((err) => console.log("Catch error: ", err));
    },

    async deleteTask({ commit }, id) {
      const baseURL = "https://localhost:7257/api/ToDo/";
      await axios.delete(baseURL + `${id}`).then(() => {
        commit("deleteTask", id);
        commit("showSnackbar", "Task deleted!");
      });
    },

    async updateTaskTitle({ state, commit }, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      const baseURL = "https://localhost:7257/api/ToDo/";
      await axios
        .put(baseURL, {
          id: payload.id,
          title: payload.title,
          done: payload.done,
          dueDate: payload.dueDate,
          addedDate: payload.addedDate,
          updatedDate: payload.updatedDate,
          doneDate: payload.doneDate,
        })
        .then((res) => {
          commit("updateTaskTitle", payload);
          commit("showSnackbar", "Task updated!");
        })
        .catch((err) => console.log("Catch error: ", err));
    },

    async updateTaskDueDate({ commit }, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      const baseURL = "https://localhost:7257/api/ToDo/";
      await axios
        .put(baseURL, {
          id: payload.id,
          title: payload.title,
          done: payload.done,
          dueDate: payload.dueDate,
          addedDate: payload.addedDate,
          updatedDate: payload.updatedDate,
          doneDate: payload.doneDate,
        })
        .then((res) => {
          commit("updateTaskDueDate", payload);
          commit("showSnackbar", "Due Date Updated!");
        })
        .catch((err) => console.log("Catch error: ", err));
    },

    async getData({ commit }) {
      const baseURL = "https://localhost:7257/api/ToDo";
      axios
        .get(baseURL)
        .then((response) => {
          commit("getSqlData", response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  modules: {},
});
