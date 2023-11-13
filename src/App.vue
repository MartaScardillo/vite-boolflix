<script>
import SearchBar from './components/searchBar.vue';
import MovieCard from './components/MovieCard.vue';
import SerieCard from './components/SerieCard.vue';
import axios from 'axios';
import { store } from './store.js';

export default {
    data() {
        return {
            store,
        };
    },

    components: {
        SearchBar,
        MovieCard,
        SerieCard,
    },

    methods: {
        fetchMovies() {
            axios
                .get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: this.store.API_KEY,
                        query: this.store.query,
                    },
                })
                .then((res) => {
                    // console.log(res.data.results);
                    this.store.movies = res.data.results;
                    // this.showdata();
                });

            axios
                .get('https://api.themoviedb.org/3/search/tv', {
                    params: {
                        api_key: this.store.API_KEY,
                        query: this.store.query,
                    },
                })
                .then((res) => {
                    this.store.series = res.data.results;
                    console.log(this.store.series);
                    this.showdata();
                });
            // console.log(store.movies);
        },
        showdata() {
            console.log(this.store.series);
            for (let i = 0; i < store.series.length; i++) {
                console.log(
                    'FILM N°' +
                        i +
                        '\n Titolo: ' +
                        store.series[i].name +
                        '\n Titolo Originale: ' +
                        store.series[i].original_name +
                        '\n Lingua Originale: ' +
                        store.series[i].original_language.toUpperCase() +
                        '\n Voto: ' +
                        store.series[i].vote_average.toFixed(2)
                );
            }
        },
    },

    created() {
        console.log('CREATED');
        // this.fetchMovies();
    },
};
</script>

<template>
    <SearchBar @request="fetchMovies" />
    <div class="container">
        <div class="row">
            <MovieCard v-for="movie in store.movies" :movieData="movie" />
        </div>
        <div>
            <SerieCard v-for="serie in store.series" :serieData="serie" />
        </div>
    </div>
</template>

<style lang="scss">
@use './style/general.scss';
</style>
