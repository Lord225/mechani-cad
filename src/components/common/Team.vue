<script lang="ts">
import TeamCard from "@/components/common/TeamCard.vue";
import { BContainer } from "bootstrap-vue-next";

export default {
  components: {
    TeamCard,
    BContainer,
  },
  data() {
    return {
      teams: this.getTeams(),
    };
  },
  watch: {
    '$i18n.locale': function() {
      this.teams = this.getTeams();
    }
  },
  methods: {
    getTeams() {
      return [
      {
          title: this.$t("team.zarzad.title"),
          content: this.$t("team.zarzad.content"),
          img: "img/zespol/zarzad.jpg",
        },
        {
          title: this.$t("team.mechaniczna.title"),
          content: this.$t("team.mechaniczna.content"),
          img: "/img/zespol/mechaniczna.jpg",
        },
        {
          title: this.$t("team.analizy.title"),
          content: this.$t("team.analizy.content"),
          img: "/img/zespol/analizy.png",
        },
        {
            title: this.$t("team.elektro.title"),
            content: this.$t("team.elektro.content"),
            img: "/img/zespol/elektro.png",   
        },
        {
            title: this.$t("team.marketing.title"),
            content: this.$t("team.marketing.content"),
            img: "/img/zespol/marketing.png",   
        },
        {
            title: this.$t("team.kierowcy.title"),
            content: this.$t("team.kierowcy.content"),
            img: "/img/zespol/kierowcy.jpg",
        }
      ];
    }
  },
};
</script>

<template>
  <section id="Zespół" class="offset">
    <div style="height: 25px;"></div>
    <div class="col-12 text-center">
      <h3 class="heading">{{ $t("team.team") }}</h3>
      <div class="heading-underline"></div>
    </div>
    <b-container
        class="d-flex flex-wrap justify-content-center gap-3 w-100"
        fluid
    >
      <TeamCard
        v-for="team in teams"
        :key="team.title"
        :title="team.title"
        :content="team.content"
        :img="team.img"
      />
    </b-container>
  </section>
</template>

<style lang="scss">
@import "src/assets/styles.scss";
</style>
