import Vue from 'vue'
import sample from './data';

var app = new Vue({
    el: '#app',
    data: {
        title: sample.title,
        address: sample.address,
        about: sample.about,
        amenities: sample.amenities,
        prices: sample.prices,
        contracted: true,
        modalOpen: false,
        headerImageStyle: {
          'background-image': 'url(/images/header.jpg)'
        }
    },
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

console.log('test 111');
