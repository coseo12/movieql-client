<template>
  <div id="app">
    <!-- <div v-if="!$apollo.loading">Loading...</div> -->
    <!-- <div v-if="$apollo.queries.movies.loading">Loading...</div> -->
    <menu-bar></menu-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue';

export default {
	components: {
		MenuBar,
	},
};
</script>

<style scoped>
@import './assets/css/app.css';
</style>