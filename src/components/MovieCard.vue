<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    data() {
        return {
            store,
        };
    },
    methods: {
        getImg(imageName) {
            return 'https://image.tmdb.org/t/p/w342/' + imageName;
        },

        getFlag(original_language) {},
    },

    props: {
        movieData: Object,
    },
};
</script>

<template>
    <div>
        <img :src="getImg(movieData.poster_path)" alt="" />
        <span>{{ movieData.title }}</span>
        <span>{{ movieData.original_title }}</span>
        <span>
            <img
                class="flags"
                :src="store.flags[movieData.original_language]"
                alt=""
        /></span>
        <span>{{ movieData.vote_average }}</span>
    </div>
</template>

<style>
.flags {
    width: 50px;
}
</style>
