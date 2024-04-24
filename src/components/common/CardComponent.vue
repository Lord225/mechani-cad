<template>
  <div class="card-component col-md-4 d-flex align-items-stretch">
    <div class="card text-white">
      <div class="card-body">
        <h4 class="card-title">
          <font-awesome-icon :icon="icon" /> {{ title }}
        </h4>
        <p class="card-text">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: Object,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.card-component {
  max-width: 25rem;
}

.card {
  background-color: black;
}

.card-text {
  text-align: initial;
}
</style>