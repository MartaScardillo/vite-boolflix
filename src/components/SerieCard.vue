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

        // getFlag(original_language) {},
    },

    props: {
        serieData: Object,
    },
};
</script>

<template>
    <div>
        <ul>
            <li>
                <img :src="getImg(serieData.poster_path)" alt="" />
                <div>
                    <span>{{ serieData.name }}</span>
                    <span>{{ serieData.original_name }}</span>
                    <span>
                        <img
                            class="flags"
                            :src="store.flags[serieData.original_language]"
                            alt=""
                    /></span>
                    <span>{{ serieData.vote_average.toFixed(2) }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
@use '../style/partials/_common.scss' as *;

.flags {
    width: 50px;
}
</style>
