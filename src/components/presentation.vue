<template>
  <div class="wrapper__pres">
    <g-image src="~/assets/images/portrait.jpg" />
    <div>
      <highlight />
      <h1>Lukas Riedel</h1>
    </div>
  </div>
</template>

<script>
import highlight from "~/assets/highlight.svg";
export default {
  name: "presentation",
  components: {
    highlight,
  },
};
</script>

<style lang="scss" scoped>
.wrapper__pres {
  display: grid;
  grid-template-columns: 1fr 2fr;
  //max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 10%;
}
img {
  padding-right: 1rem;
}
@media screen and (max-width: 1240px) {
  .wrapper__pres {
    grid-template-columns: auto;
  }
  img {
    padding: 0rem;
    padding-bottom: 1rem;
    max-width: 400px;
    margin: auto;
  }
}
</style>