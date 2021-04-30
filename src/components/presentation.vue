<template>
  <div>
    <div class="presentationContainer">
      <g-image src="~/assets/images/portrait.jpg" />
      <div>
        <strong>Hi!</strong>
        <p>
          Passionate problem solver and curious designer here. I want to use my
          skills for identifying and understanding users’ needs in ways that
          have real and tangible benefits in people’s everyday lives.
        </p>
      </div>
    </div>
    <divider class="divider hideMobile" />
  </div>
</template>

<script>
import divider from "~/assets/divider.svg";
export default {
  name: "presentation",
  components: {
    divider,
  },
};
</script>

<style lang="scss" scoped>
.divider {
  position: relative;
  top: -14px;
}
.presentationContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 10rem auto 0;
  align-items: center;
  grid-gap: 2rem;
  img {
    max-height: 50vh;
    display: block;
    object-fit: contain;
  }
  strong {
    font-size: 4rem;
    padding-bottom: 1rem;
  }
  p {
    font-size: 1.5rem;
  }
}

@media screen and (min-width: 900px) {
  .hideDesktop {
    display: none;
  }
}

@media screen and (max-width: 900px) {
  img {
    display: none;
  }
  .hideMobile {
    display: none;
  }
  .presentationContainer {
    grid-template-columns: 1fr;
    margin-top: 5rem;
  }
}
</style>