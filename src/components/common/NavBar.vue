<script setup lang="ts">
import "bootstrap";
</script>

<style lang="scss">
@import "bootstrap/dist/css/bootstrap.min.css";
.navbar {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1rem;
  max-width: 100vw;
  letter-spacing: 0.1rem;
  background: rgba(0, 0, 0, 0.6) !important;
  backdrop-filter: blur(10px);

  .navbar-brand {
    img {
      height: 3rem;
      margin-left: 1rem;
      margin: 0 0;
      padding: 0 0;
      max-width: 100%;
    }
  }

  .flag {
    height: 10%;
    width: 20%;
  }

  .navbar-nav {
    li {
      padding-left: 0.7rem;
    }

    .navbar-link {
      color: white;
      padding-top: 0.8rem;
    }

    .nav-link {
      &.active,
      &:hover {
        color: #00adef;
      }
    }
  }
  .logo-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; 
    gap: 1rem;
    margin-right: 1rem;
  }

  .logo-link {
    display: flex;
  }

  .logo {
    height: 1.5rem;
    width: auto;
  }

  @media (max-width: 768px) {
  
  }
}
</style>

<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top">
    <router-link class="navbar-brand" to="/"
      ><img src="/img/H.png"
    /></router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarResponsive"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/#Home">{{
            $t("nav.home")
          }}</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/#Bolid">{{
            $t("nav.bolid")
          }}</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/#Zespół">{{
            $t("nav.team")
          }}</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/#Zawody">{{
            $t("nav.competition")
          }}</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/#Współpraca">{{
            $t("nav.colab")
          }}</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/#Kontakt">{{
            $t("nav.contact")
          }}</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/predecessor">{{
            $t("nav.predecessor")
          }}</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#" @click="switchLanguage()"><img class="flag pull-right" src="/img/ukflag.png"
        /></router-link>
        </li>
      </ul>
    </div>
    <div class="logo-container">
      
      <a href="https://www.agh.edu.pl/" target="_blank" class="logo-link">
        <img class="logo" src="/img/AGH.png" />
      </a>
      <a href="http://www.imir.agh.edu.pl/" target="_blank" class="logo-link">
        <img class="logo" src="/img/WIMIR.png" />
      </a>
      <a target="_blank" class="logo-link">
        <img class="logo" src="/img/Logo.png" />
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  methods: {
    switchLanguage() {
      const lang = this.$i18n.locale === "en" ? "pl" : "en";
      if (lang === "pl") {
        document.documentElement.lang = "pl";
      } else {
        document.documentElement.lang = "en";
      }
      this.$i18n.locale = lang;
    },
  },
};
</script>
