<template>
  <v-btn
    color="primary_light"
    class="btn-done-sorting"
    outlined
    @click="$store.commit('toggleSorting')"
  >
    Done Sorting
  </v-btn>
</template>

<script>
export default {};
</script>

<style>
.btn-done-sorting {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
