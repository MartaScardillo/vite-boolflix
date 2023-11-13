<script>
import axios from 'axios';
import { store } from '../store.js';
import SearchBar from './searchBar.vue';

export default {
    data() {
        return {
            store,
        };
    },
    components: { SearchBar },

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
};
</script>

<template>
    <div class="header">
        <span style="color: RED" class="d-flex">BOOLFLIX</span>
        <SearchBar @request="fetchMovies" />
    </div>
</template>

<style lang="scss">
@use '../style/partials/_common.scss' as *;
.header {
    background-color: black;
    position: fixed;
    width: 100%;
    height: 70px;
    max-height: 70px;
    z-index: 1;
}
</style>
