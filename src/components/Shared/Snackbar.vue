<template>
  <v-snackbar v-model="$store.state.snackbar.show">
    {{ $store.state.snackbar.text }}

    <template v-slot:action="{ attrs }">
      <v-btn
        color="primary_light"
        text
        v-bind="attrs"
        @click="$store.commit('hideSnackbar')"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {};
</script>

<style scoped></style>
