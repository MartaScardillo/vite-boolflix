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
                    <li>Titolo: {{ movieData.title }}</li>
                    <li>Titolo originale: {{ movieData.original_title }}</li>
                    <li>
                        <span>Lingua originale: </span>

                        <img
                            class="flags"
                            :src="store.flags[movieData.original_language]"
                            :alt="movieData.original_language"
                        />
                    </li>
                    <li>
                        Voto: {{ movieData.vote_average }}
                        <font-awesome-icon
                            v-for="i in movieData.vote_average"
                            :icon="['fas', 'star']"
                        />
                        <font-awesome-icon
                            v-for="i in 5 - movieData.vote_average"
                            :icon="['far', 'star']"
                        />
                    </li>
                    <li>Overview: {{ movieData.overview }}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style></style>
