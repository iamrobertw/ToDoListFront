<template>
  <div class="about pa-6 bright">
    <h3>About {{ $store.state.appTitle }}</h3>
    <p>
      This application is written in Vue.js 2 and ASP.NET Core 6.0 frameworks.
      Styling done in Vuetify and CSS. Tasks of things to do are saving on
      Microsoft SQL Server. Yes, this is a fullstack application :).
    </p>
  </div>
</template>

<style>
.about {
  height: 100vw !important;
}
</style>
