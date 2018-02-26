<template>
    <div class="image-carousel">
        <img :src="image"/>
        <div class="controls">
            <carousel-control dir="left" @change-image="changeImage"></carousel-control>
            <carousel-control dir="right" @change-image="changeImage"></carousel-control>
        </div>
    </div>
</template>
<script>
    import CarouselControl from '../components/CarouselControl'

    export default {
        props: ['images'],
        data() {
            return {
                index: 0,
            }
        },
        computed: {
            image() {
                return this.images[this.index];
            }
        },
        methods: {
            changeImage(val) {
                this.index = (this.index + parseInt(val)) % this.images.length;
            }
        },
        components: {
            CarouselControl
        }
    }
</script>
<style>
    .image-carousel {
        align-items: center;
        display: flex;
        height: 100%;
        justify-content: center;
        margin-top: -12vh;
        position: relative;
    }

    .image-carousel img {
        max-width: 100%;
    }
    .image-carousel .controls {
        display: flex;
        justify-content: space-between;
        position: absolute;
        width: 100%;
    }
</style>