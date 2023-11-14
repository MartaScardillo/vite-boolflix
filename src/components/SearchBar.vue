<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store,
        };
    },

    emits: ['request'],
};
</script>

<template>
    <div class="search d-flex">
        <input
            type="text"
            placeholder="Cerca un film"
            class="search_bar"
            v-model="this.store.query"
        />
        <button class="search_button" type="submit" @click="$emit('request')">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </button>
    </div>
</template>

<style lang="scss">
@use '../style/partials/_common.scss' as *;
// .search_button {
//     border: none;
//     outline: none;
// }

// .search_bar {
//     border: none;
//     padding: 5px;
//     outline: none;
// }
</style>
