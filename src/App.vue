<script>
import { Axios } from 'axios';
import AppHeader from './components/AppHeader.vue';
import MovieCard from './components/MovieCard.vue';
import SerieCard from './components/SerieCard.vue';
import { store } from './store.js';

export default {
    data() {
        return {
            store,
        };
    },

    components: {
        MovieCard,
        SerieCard,
        AppHeader,
    },

    created() {
        // console.log('CREATED');
    },
};
</script>

<template>
    <AppHeader />
    <div class="container">
        <h1 class="title">Movies</h1>
        <div class="row">
            <MovieCard v-for="movie in store.movies" :movieData="movie" />
        </div>
        <h1 class="title">Tv Series</h1>
        <div class="row">
            <SerieCard v-for="serie in store.series" :serieData="serie" />
        </div>
    </div>
</template>

<style lang="scss">
@use './style/general.scss';
</style>
