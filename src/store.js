import { reactive } from 'vue';

export const store = reactive({
    API_KEY: '228b3bd6e454836a264cf35b544ea796',
    query: '',
    movies: [],
    series: [],
    flags: {
        it: 'italia.svg.png',
        en: 'inghilterra.svg.png',
        fr: 'francia.svg.png',
        ja: 'giappone.svg.png',
        es: 'spagna.svg.png',
        de: 'germania.svg.png',
        kn: 'india.svg.png',
        hi: 'india.svg.png',
        bn: 'india.svg.png',
    },
});
