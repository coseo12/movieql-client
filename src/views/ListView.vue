<template>
  <div>
      <ul class="item-list">
        <li v-for="item in movies" :key="item.id" class="post">
            <div class="points">
                {{ item.score || 0}}
            </div>
            <div>
                <p class="item-title">
                    <router-link v-bind:to="`/movie/${item.id}`">{{ item.title }}</router-link>
                </p>
                <small class="link-text"> 
                    {{ item.id }} 
                </small>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
import { movies } from '../graphql/query.js';

export default {
	data() {
		return {
			movies: '',
		};
	},
	apollo: {
		movies,
	},
};
</script>

<style scoped>
@import '../assets/css/listView.css';
</style>