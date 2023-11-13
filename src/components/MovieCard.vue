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
            return 'https://image.tmdb.org/t/p/w185/' + imageName;
        },

        // getFlag(original_language) {},
    },

    props: {
        movieData: Object,
    },
};
</script>

<template>
    <div>
        <ul class="card">
            <li class="card_image">
                <img :src="getImg(movieData.poster_path)" alt="" />
            </li>
            <li class="card_details">
                <ul>
                    <li>{{ movieData.title }}</li>
                    <li>{{ movieData.original_title }}</li>
                    <li>
                        <img
                            class="flags"
                            :src="store.flags[movieData.original_language]"
                            alt=""
                        />
                    </li>
                    <li>{{ movieData.vote_average.toFixed(2) }}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style>
.flags {
    width: 50px;
}
</style>
