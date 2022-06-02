<template>
  <div>
    <v-list-item
      @click="$store.dispatch('doneTask', task.id)"
      :class="{ secondary: task.done }"
      class="primary-colors"
      v-ripple="{ class: `task-color` }"
      light
    >
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox
            :input-value="task.done"
            color="primary_light"
          ></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': task.done }"
            >{{ task.title }}</v-list-item-title
          >
        </v-list-item-content>

        <v-list-item-action v-if="task.dueDate">
          <v-list-item-action-text class="primary-colors-two">
            {{ task.dueDate | niceDate }}</v-list-item-action-text
          >
        </v-list-item-action>

        <v-list-item-action>
          <task-menu :task="task" />
        </v-list-item-action>

        <v-list-item-action v-if="$store.state.sorting">
          <v-btn color="primary_light" class="handle" icon>
            <v-icon>mdi-sort-variant</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider class="border-color"></v-divider>
  </div>
</template>

<script>
import { format } from "date-fns";
import TaskMenu from "./TaskMenu.vue";
export default {
  props: ["task"],
  filters: {
    niceDate(value) {
      return format(new Date(value), "MMM dd");  
    },
  },
  components: {
    "task-menu": require("@/components/Todo/TaskMenu.vue").default,
  },
};
</script>

<style scoped>
.primary-colors {
  color: #d1d7ed !important;
  font-weight: 300;
  background: #2d283e;
}
.primary-colors-two {
  margin-right: -1rem !important;
  background: transparent !important;
  color: #d1d7ed !important;
}
.task-color {
  background: hsla(252, 48%, 37%, 0.3) !important;
}
.border-color {
  background: #d1d7ed !important;
}
.sortable-ghost {
  opacity: 0;
}
.sortable-drag {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
</style>
