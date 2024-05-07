<template>
  <section id="Współpraca" class="offset">
    <div class="container-coop">
      <div class="col-12 text-center">
        <h3 class="heading">{{ $t("cooperation.cooperation") }}</h3>
        <div class="heading-underline"></div>
      </div>

      <div class="narrow text-center">
        <div class="col-12">
          <p class="lead">{{ $t("cooperation.cooperationIntro") }}</p>
        </div>
      </div>
      
      <h1>{{ $t("cooperation.topSponsors") }}</h1>

      <b-container class="w-100 gap-5">
        <b-row
          class="sponsor-row"
          no-gutters
        >
          <b-col
            xs="12"
            sm="6"
            md="4"
            lg="3"
            xl="2"
            v-for="item in topSponsors"
            :key="item.link"
          >
            <PortfolioItem :link="item.link" :image="item.image" />
          </b-col>
        </b-row>
      </b-container>

      <h1>{{ $t("cooperation.sponsors") }}</h1>

      <b-container class="w-100 gap-5">
        <b-row
          class="sponsor-row"
          no-gutters
        >
          <b-col
            xs="12"
            sm="6"
            md="4"
            lg="3"
            xl="2"
            v-for="item in sponsors"
            :key="item.link"
          >
            <PortfolioItem :link="item.link" :image="item.image" />
          </b-col>
        </b-row>
      </b-container>

      <div class="narrow text-center">
        <div class="col-12">
          <p class="lead">{{ $t("cooperation.cooperationDescription") }}</p>
        </div>
      </div>

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
    BContainer,
    BRow,
    BCol
  },
  data() {
    return {
      topSponsors: [
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
      sponsors: [
        { link: "https://mesco.com.pl/", image: "img/wspolpraca/Mesco.png" },
        { link: "http://www.ont.com.pl/", image: "img/wspolpraca/ONT.png" },
      ]
    };
  },
};
</script>

<style scoped>
@import "src/assets/styles.scss";
.container-coop {
  background-color: #f8f9fa;
  padding: 2rem 5rem;
}
.narrow {
  width: 75%;
  margin: 1.5rem auto;
  padding-top: 2rem;
}
.sponsor-row {
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
h1 {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  width: 100%;
  padding: 1rem;
}
</style>
