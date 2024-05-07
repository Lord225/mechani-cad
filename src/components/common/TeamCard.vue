<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
import { BCard, BCardText, BCol } from "bootstrap-vue-next";

export default {
  components: {
    BCard,
    BCardText,
    BCol,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.card-component {
  max-width: 100%;

  .card {
    height: 100%;
    transition: all 0.15s ease;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 40px 40px rgba(0, 20, 60, 0.8);
      z-index: 100;
    }
    .card-title {
      text-align: center;
    }
    .card-title::after {
      content: "";
      display: block;
      width: 30%;
      margin: 1rem auto;
      border-bottom: 2px solid #181818;
    }
    .card-img-top {
      width: 100%;
      aspect-ratio: 1.66;
      object-fit: cover;
      object-position: 0 0;
    }
  }
}
</style>

<template>
  <b-col class="card-component" md="5" d-flex>
    <b-card
      :title="title"
      :img-src="img"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2"
    >
      <b-card-text>
        {{ content }}
      </b-card-text>
    </b-card>
  </b-col>
</template>
