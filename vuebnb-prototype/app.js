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
          'background-image': 'url(sample/header.jpg)'
        }
    },
    methods: {
      escapeKeyListener: function(e) {
        if (e.keyCode === 27 && this.modalOpen) {
          this.modalOpen = false;
        }
      }
    },
    watch: {
      modalOpen: function() {
        var className = 'modal-open';

        if (this.modalOpen) {
          document.body.classList.add(className);
        } else {
          document.body.classList.remove(className);
        }
      }
    },
    created: function() {
      document.addEventListener('keyup', this.escapeKeyListener);
    },
    destroyed: function() {
      document.removeEventListener('keyup', this.escapeKeyListener);
    }
});
