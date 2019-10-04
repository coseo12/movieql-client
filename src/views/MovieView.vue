<template>
  <div class="media-card">
    <div class="media-card-image">
      <img src="../assets/logo.png" alt="">
    </div>
    <div class="media-card-content">
      <h4 class="media-card-heading">
        {{ movie.title }}
      </h4>
      <div class="media-card-body">
        {{ movie.score }}
      </div>
    </div>
  </div>
</template>

<script>
import { movieDetails } from '../graphql/query.js';

export default {
	data() {
		return {
			movie: '',
		};
	},
	apollo: {
		movie: {
			query: movieDetails,
			variables() {
				return {
					id: parseFloat(this.$route.params.id, 10),
				};
			},
		},
	},
};
</script>

<style scoped>
@import '../assets/css/movieView.css';
</style>