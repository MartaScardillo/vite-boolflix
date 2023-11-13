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
        serieData: Object,
    },
};
</script>

<template>
    <div>
        <ul class="card">
            <li class="card_image">
                <img :src="getImg(serieData.poster_path)" alt="" />
            </li>
            <li class="card_details">
                <ul>
                    <li>Titolo: {{ serieData.name }}</li>
                    <li>Titolo originale: {{ serieData.original_name }}</li>
                    <li>
                        <span>Lingua originale: </span>
                        <img
                            class="flags"
                            :src="store.flags[serieData.original_language]"
                            alt=""
                        />
                    </li>
                    <li>
                        Voto:
                        <font-awesome-icon
                            v-for="i in serieData.vote_average"
                            :icon="['fas', 'star']"
                        />
                        <font-awesome-icon
                            v-for="i in 5 - serieData.vote_average"
                            :icon="['far', 'star']"
                        />
                    </li>
                    <li>Overview: {{ serieData.overview }}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
@use '../style/partials/_common.scss' as *;

.flags {
    width: 20px;
}
</style>
