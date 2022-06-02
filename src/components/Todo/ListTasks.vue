<template>
  <v-list class="pt-0 pb-0" flat>
    <draggable v-model="tasks" handle=".handle">
      <task v-for="task in tasks" :key="task.id" :task="task" />
    </draggable>
  </v-list>
</template>

<script>
import draggable from "vuedraggable";
import axios from "axios";

export default {
  data: () => ({
    data: [],
  }),
  computed: {
    tasks: {
      get() {
        return this.$store.getters.tasksFiltered;
      },
      set(value) {
        this.$store.commit("setTasks", value);
      },
    },
  },
  components: {
    task: require("@/components/Todo/TheTask.vue").default,
    draggable,
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get("https://localhost:7257/api/ToDo");
        this.data = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
