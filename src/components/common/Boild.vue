<script setup lang="ts">
import CardComponent from "./CardComponent.vue";
import { faCarSide, faTint, faBolt } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <div id="Bolid" class="offset container-bg">
    <div class="container text-center">
      <h3 class="heading">{{ $t("bolid.discover") }}</h3>
      <div class="heading-underline"></div>
      <div class="card-flex">
        <CardComponent
          title="LEKKA KAROSERIA"
          :icon="faCarSide"
          text="Samonośna konstrukcja z laminatu na bazie włókien węglowych, pokryta lakierem o niskim współczynniku tarcia wiskotycznego. W połączeniu z opływowym kształtem karoserii zapewnia minimalną siłę oporu powietrza."
        />
        <CardComponent
          title="OGNIWO WODOROWE"
          :icon="faTint"
          text="Silnik elektryczny zasilany jest ogniwem wodorowym - nowoczesnym i ekologicznym żródłem energii o wysokiej sprawności."
        />
        <CardComponent
          title="SILNIK INDUKCYJNY"
          :icon="faBolt"
          text="Wyróżniający się zdolnością hamowania rekuperacyjnego, dzięki czemu podczas zwalniania nie traci zgromadzonej energii, lecz przekształca ją w energię elektryczną."
        />
        <img class="bolid-image" src="/img/Hydrive Bolid Shape White-04.png" />
        <p class="lead">
          "Project HYDRIVE. We race for tomorrow" to projekt mający na celu
          pokazanie, że jesteśmy w stanie wykorzystać najnowszą technologię do
          zbudowania pojazdu napędzanego paliwem przyszłości. Jest to
          jednocześnie wskazanie realnej alternatywy dla obecnie powszechnie
          stosowanych napędów spalinowych. Chcemy udowodnić, że jako młodzi
          inżynierowie potrafimy w ten sposób sprostać stale rosnącym wymaganiom
          w kwestii ekologii i wymagań technicznych. <br />
          Dzięki wytrwałej pracy zespołu projektowego HYDRIVE możemy przedstawić
          Państwu bolid HYDRIVE 1, który został zaprojektowany z myślą o starcie
          w międzynarodowych zawodach Shell Eco-marathon - gdzie główną ideą
          jest promocja i rozwój ekologicznych źródeł energii.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  components: {
    CardComponent,
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/styles.scss";
.container-bg {
  background: black;
  color: white;

  .bolid-image {
    max-width: 100%;
    transition: transform 0.2s ease;
    margin: 1rem 2rem;
    padding: 0rem 3rem;

    &:hover {
      transform: scale(1.1);
      cursor: zoom-in;
    }
  }
  p {
    padding-bottom: 20%;
    padding-top: 2rem;
  }
}

.card-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem 0;
}

.narrow {
  width: 75%;
  margin: 1.5rem auto;
  padding-top: 2rem;
  h1 {
    font-size: 2.4rem;
  }
}

.shell {
  margin-top: 2rem;
  transition: transform 0.5s ease;
  max-width: 120%;

  &:hover {
    transform: scale(1.1);
  }
}

.jumbotron {
  border-radius: 0;
  padding: 3re 0 2rem;
  margin-bottom: 0;
}
</style>
