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
    <div class="d-flex">
        <input
            type="text"
            placeholder="Cerca un film"
            class="search_bar"
            v-model="this.store.query"
        />
        <button type="submit" class="search_button" @click="$emit('request')">
            btn
        </button>
    </div>
</template>

<style scoped>
.search_button {
    border: none;
    outline: none;
}

.search_bar {
    border: none;
    padding: 5px;
    outline: none;
}

.d-flex {
    display: flex;
}
</style>
