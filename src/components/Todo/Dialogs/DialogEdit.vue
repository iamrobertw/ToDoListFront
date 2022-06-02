<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card class="accent">
      <v-card-title class="headline"> Edit the task? </v-card-title>
      <v-card-text class="primary-color">
        <v-text-field dark v-model="taskTitle" @keyup.enter="saveTask" />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn dark outlined color="bright" text @click="$emit('close')">
          Cancel
        </v-btn>
        <v-btn
          outlined
          color="primary_light"
          :disabled="taskTitleInvalid"
          text
          dark
          @click="saveTask"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      taskTitle: null,
    };
  },
  computed: {
    taskTitleInvalid() {
      return !this.taskTitle || this.taskTitle === this.task.title;
    },
  },
  methods: {
    saveTask() {
      if (!this.taskTitleInvalid) {
        let payload = {
          id: this.task.id,
          title: this.taskTitle,
        };
        this.$store.dispatch("updateTaskTitle", payload);
        this.$emit("close");
      }
    },
  },
  mounted() {
    this.taskTitle = this.task.title;
  },
};
</script>

<style scoped>
.primary-color {
  background: #2d283e;
  color: #d1d7e0;
}
.headline {
  color: #d1d7e0 !important;
}
.v-text-field {
  color: #d1d7e0 !important;
}
</style>
