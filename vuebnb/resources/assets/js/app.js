import Vue from 'vue';
import "core-js/fn/object/assign";
import { populateAmenitiesAndPrices } from "./helpers";

let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);

Vue.component('image-carousel', {
    template: `<div class="image-carousel">
                <img v-bind:src="image"/>
               </div>`,
    data() {
        return {
            images: [
                '/images/1/Image_1.jpg',
                '/images/1/Image_2.jpg',
                '/images/1/Image_3.jpg',
                '/images/1/Image_4.jpg',
            ],
            index: 0,
        }
    },
    computed: {
        image() {
            return this.images[this.index];
        }
    }
});

let app = new Vue({
    el: '#app',
    data: Object.assign(model, {
        contracted: true,
        modalOpen: false,
        headerImageStyle: {
          'background-image': `url(${model.images[0]})`
        }
    }),
    methods: {
      escapeKeyListener(e) {
        if (e.keyCode === 27 && this.modalOpen) {
          this.modalOpen = false;
        }
      }
    },
    watch: {
      modalOpen() {
        var className = 'modal-open';

        if (this.modalOpen) {
          document.body.classList.add(className);
        } else {
          document.body.classList.remove(className);
        }
      }
    },
    created() {
      document.addEventListener('keyup', this.escapeKeyListener);
    },
    destroyed() {
      document.removeEventListener('keyup', this.escapeKeyListener);
    }
});
