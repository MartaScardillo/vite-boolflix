<script>
import SearchBar from './components/searchBar.vue';
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
                });
        },
    },

    created() {
        console.log('CREATED');
        this.fetchMovies();
    },
};
</script>

<template>
    <SearchBar @request="fetchMovies()" />
</template>

<style scoped></style>
