<template>
  <div id="Kontakt" class="offset">
    <footer>
      <div class="row justify-content-center">
        <div class="col-md-5 text-center">
          <img src="/img/navloga.png" />
          <p>
            {{ $t("footer.text") }}
          </p>
          <address>
            <i class="demo-icon icon-mail"></i>
            <a href="mailto:knkmcad@agh.edu.pl"
              ><strong>knkmcad@agh.edu.pl</strong></a
            >
            <br />
            <i class="demo-icon icon-location"></i>
            <strong>{{ $t("footer.address") }}</strong>
          </address>
          <br />

          <a href="https://www.facebook.com/projectHYDRIVE/" target="_blank"
            ><i class="fab fa-facebook"></i
          ></a>
          <a href="https://www.instagram.com/projecthydrive/" target="_blank"
            ><i class="fab fa-instagram"></i
          ></a>
          <a
            href="https://www.linkedin.com/company/project-hydrive/about/"
            target="_blank"
            ><i class="fab fa-linkedin"></i
          ></a>
        </div>
        <hr class="socket" />
        &copy; Project Hydrive
        <!-- Made by Maciej Gładysz And later by Maciej Złotorowicz-->
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
footer {
  background-color: #40474e;
  color: white;
  padding: 2rem 0 3rem;
  margin-top: 1rem;

  img {
    height: 5rem;
    margin: 2rem 0;
  }

  a {
    color: white;
  }

  svg.svg-inline--fa {
    font-size: 2rem;
    margin: 1.2rem 0.5rem 0.5rem;

    &:hover {
      color: #00adef;
    }
  }
}

hr.socket {
  border-top: 0.2rem solid #00adef;
  width: 100%;
}
</style>
