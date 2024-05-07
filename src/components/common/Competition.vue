<template>
    <section id="Zawody" class="fixed-background container-bg">
      <div class="dark">
        <div class="text-center">
          <h3 class="heading">{{ $t("competition.title") }}</h3>
          <div class="heading-underline"></div>
        </div>
        <div class="narrow text-center">
          <p class="lead">
            {{ $t("competition.text1") }}
            <br />
            <br />
            {{ $t("competition.text2") }}
          </p>
          <div class="text-center">
            <a
              href="https://www.shell.com/make-the-future/shell-ecomarathon.html"
            >
              <img class="shell" src="/img/Shelllogo.svg" />
            </a>
          </div>
        </div>
      </div>
    </section>
</template>

<style lang="scss">
$heading-font-size: 1.9rem;
$underline-width: 3rem;
$underline-height: 0.2rem;
$underline-color: #00adef;
$dark-background-color: rgba(0, 0, 0, 0.69);

.container-bg {
  background: black;
  color: white;
  img {
    max-width: 100%;
    transition: transform 0.1s ease;
    margin: 1rem 2rem;
    padding: 0 3rem;

    &:hover {
      transform: scale(1.1);
      cursor: zoom-in;
    }
  }

  p {
    padding: 2rem 0 20% 0;
  }
}

.narrow {
  width: 75%;
  margin: 1.5rem auto;
  padding-top: 2rem;
}

.shell {
  margin-top: 2rem;
  transition: transform 0.1s ease;
  max-width: 120%;

  &:hover {
    transform: scale(0.1);
  }
}

.heading {
  font-size: $heading-font-size;
  font-weight: 700;
  text-transform: uppercase;
  padding-bottom: $heading-font-size;
}

.heading-underline {
  width: $underline-width;
  height: $underline-height;
  background-color: $underline-color;
  margin: 0 auto 2rem;
}

.dark {
  background-color: $dark-background-color;
  color: white;
  padding: 10rem 2rem;
}

.fixed-background {
  background-image: url('/img/Hydrive-Shell-Eco-marathon.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

.fixed-background {
  h3 {
    margin-bottom: 1rem;
  }

  p {
    margin-top: 1rem;
  }
}
</style>

<script lang="ts">
export default {
  name: "Competition",
};
</script>
