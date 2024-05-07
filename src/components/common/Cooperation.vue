<template>
  <section id="Współpraca" class="offset">
    <div class="jumbotron container-fluid">
      <div class="col-12 text-center">
        <h3 class="heading">{{ $t("cooperation.cooperation") }}</h3>
        <div class="heading-underline"></div>
      </div>

      <div class="narrow text-center">
        <div class="col-12">
          <p class="lead">{{ $t("cooperation.cooperationDescription") }}</p>
        </div>
      </div>
      <b-container class="gap-3 w-100" fluid>
        <b-row>
          <b-col
            xs="6"
            sm="4"
            md="3"
            lg="2"
            xl="2"
            v-for="item in portfolioItems"
            :key="item.link"
          >
            <PortfolioItem :link="item.link" :image="item.image" />
          </b-col>
        </b-row>
      </b-container>

      <div class="narrow text-center">
        <div class="col-12">
          <p class="lead">{{ $t("cooperation.becomePartner") }}</p>
          <a
            class="btn btn-secondary btn-lg"
            href="https://www.facebook.com/projectHYDRIVE/"
            target="_blank"
            >{{ $t("cooperation.visitOurFb") }}</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import PortfolioItem from "./PortfolioItem.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import { BContainer, BRow, BCol } from "bootstrap-vue-next";

export default {
  name: "Cooperation",
  components: {
    PortfolioItem,
  },
  data() {
    return {
      portfolioItems: [
        { link: "https://mesco.com.pl/", image: "img/wspolpraca/Mesco.png" },
        { link: "http://www.ont.com.pl/", image: "img/wspolpraca/ONT.png" },
        {
          link: "https://urbicum.com/pl/",
          image: "img/wspolpraca/Urbicum.png",
        },
        {
          link: "http://jc-services.pl/en/index.html",
          image: "img/wspolpraca/JC Services.png",
        },
        {
          link: "http://www.airproducts.com.pl/",
          image: "img/wspolpraca/AirProducts.png",
        },
        {
          link: "https://pl.ppgrefinish.com/pl/",
          image: "img/wspolpraca/PPG.png",
        },
        { link: "http://s-point.pl/", image: "img/wspolpraca/S-point.png" },
      ],
    };
  },
};
</script>

<style scoped>
@import "src/assets/styles.scss";
.narrow {
  width: 75%;
  margin: 1.5rem auto;
  padding-top: 2rem;
}
</style>
