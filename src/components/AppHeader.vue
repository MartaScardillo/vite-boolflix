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
                    const movies = res.data.results;
                    console.log(movies);
                    movies.forEach((movie) => {
                        movie.vote_average = Math.ceil(movie.vote_average / 2);
                        // console.log(movie.vote_average);
                    });

                    this.store.movies = movies;
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
                    const series = res.data.results;
                    console.log(series);
                    series.forEach((serie) => {
                        serie.vote_average = Math.ceil(serie.vote_average / 2);
                        // console.log(serie.vote_average);
                    });

                    this.store.series = series;
                });
            // console.log(store.movies);
        },
        // showdata() {
        //     console.log(this.store.series);
        //     for (let i = 0; i < store.series.length; i++) {
        //         console.log(
        //             'FILM N°' +
        //                 i +
        //                 '\n Titolo: ' +
        //                 store.series[i].name +
        //                 '\n Titolo Originale: ' +
        //                 store.series[i].original_name +
        //                 '\n Lingua Originale: ' +
        //                 store.series[i].original_language.toUpperCase() +
        //                 '\n Voto: ' +
        //                 store.series[i].vote_average.toFixed(2)
        //         );
        //     }
        // },
    },
};
</script>

<template>
    <div class="header d-flex">
        <ul class="header_content d-flex justify-between align-center">
            <li class="header_title d-flex">BOOLFLIX</li>
            <li>
                <SearchBar @request="fetchMovies" />
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
@use '../style/partials/_common.scss' as *;
.header {
    background-color: rgba(0, 0, 0, 0.713);
    position: fixed;
    width: 100%;
    height: 70px;
    max-height: 70px;
    z-index: 1;
}

.header_content {
    width: 90%;
    margin: 0 auto;
    flex-wrap: wrap;
}

.header_title {
    color: red;
    font-size: 30px;
}
</style>
