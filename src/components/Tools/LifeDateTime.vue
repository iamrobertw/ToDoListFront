<template>
  <div class="text-color text-subtitle-2 ml-13 font-weight-light">
    {{ date }}
  </div>
</template>

<script>
import { format } from "date-fns";

export default {
  data() {
    return {
      date: "",
    };
  },
  methods: {
    getDate() {
      this.date = format(new Date(), "MMMM dd, H:mm:ss");
      setTimeout(this.getDate, 1000);
    },
  },
  mounted() {
    this.getDate();
  },
};
</script>

<style scoped>
.text-color {
  color: #d1d7e0 !important;
}
</style>
