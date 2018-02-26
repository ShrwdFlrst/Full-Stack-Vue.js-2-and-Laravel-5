import Vue from 'vue';
import "core-js/fn/object/assign";
import { populateAmenitiesAndPrices } from "./helpers";
import ImageCarousel from '../components/ImageCarousel'
import ModalWindow from '../components/ModalWindow'
import HeaderImage from '../components/HeaderImage'
import FeatureList from '../components/FeatureList'

let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);

let app = new Vue({
    el: '#app',
    data: Object.assign(model, {
        contracted: true,
    }),
    components: {
        ImageCarousel,
        ModalWindow,
        HeaderImage,
        FeatureList
    },
    methods: {
        openModal() {
            this.$refs.imagemodal.modalOpen = true;
        }
    }
});
