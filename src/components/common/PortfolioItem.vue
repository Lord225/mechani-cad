<template>
    <div class="portfolio text-center">
      <a :href="link" target="_blank">
        <img :src="image" />
      </a>
    </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "PortfolioItem",
  props: ["link", "image"],
};
</script>

<style lang="scss" scoped>
.portfolio {
  width: 100%;
  img {
    width: 100%;
    transition: transform 0.1s ease;

    &:hover {
      transform: scale(1.1);
      cursor: zoom-in;
    }
  }
}
</style>
