<!-- Deze file is de main file die alles rendert naar je DOM, alles wordt hierin ingeladen -->
<template>
  <div>
    <div class="nav">
      <div class="title">Vue cursus</div>

      <!-- je kan dit ook programmatisch doen als je via animations wilt switchen van pages -->
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<!-- styling voor heel de app, in aparte pages kan je 'scoped' gebruiken om specifiek voor die page te stijlen -->
<style lang="scss">
  .nav {
    background-color: cornflowerblue;
    height:42px;
    .title {
      font-size: 12px;
    }
  }
</style>