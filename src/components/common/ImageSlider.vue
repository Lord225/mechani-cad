<template>
  <carousel 
    :items-to-show="1"
    :autoplay="5000"
    :wrap-around="true"
    >
    <slide v-for="(slide, index) in slides" :key="index">
      <img class="d-block w-100 h-100" :src="slide.image" :alt="slide.alt">
      <div v-if="slide.caption" class="carousel-caption d-none d-md-block">
        <h1><img class="hydrive_logo" :src="slide.logo" :alt="slide.logoAlt"/></h1>
        <a class="btn btn-outline-light btn-lg" :href="slide.link">Rozpocznij</a>
      </div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slides: [
        { image: 'img/slide1.jpg', alt: 'First slide', caption: true, logo: 'img/Hydrive_logo.png', logoAlt: 'Hydrive - logo', link: '#Bolid' },
        { image: 'img/HydriveTeam.jpg', alt: 'Second slide' },
        { image: 'img/HydriveShell.jpg', alt: 'Third slide' },
      ]
    }
  }
}
</script>

<style lang="scss">
.carousel {
  background-color: black;
  .slide {
    height: 100%;

    img {
      height: 100%;
      object-fit: cover;
    }
  }
  .carousel-caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .hydrive_logo {
      width: 100%;
      margin: 0 auto;
      margin-top: 10%;
    }
  }
  // style for Pagination
  .carousel__pagination {
    // color
    .carousel__pagination-button--active::after {
      background-color: #00adef;
    }
  }
  .carousel__icon {
    color: #00adef;
    width: 2rem;
  }
}
</style>