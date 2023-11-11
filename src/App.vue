<script>
import SearchBar from './components/searchBar.vue';
import MovieCard from './components/MovieCard.vue';
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
                    this.showdata();
                });

            // console.log(store.movies);
        },
        showdata() {
            console.log(this.store.movies);
            for (let i = 0; i < store.movies.length; i++) {
                console.log(
                    'FILM N°' +
                        i +
                        '\n Titolo: ' +
                        store.movies[i].title +
                        '\n Titolo Originale: ' +
                        store.movies[i].original_title +
                        '\n Lingua Originale: ' +
                        store.movies[i].original_language.toUpperCase() +
                        '\n Voto: ' +
                        store.movies[i].vote_average
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
    <MovieCard v-for="movie in store.movies" :movieData="movie" />
</template>

<style scoped></style>
