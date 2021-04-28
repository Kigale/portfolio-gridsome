<template>
  <div>
    <div class="presentationContainer">
      <g-image src="~/assets/images/portrait.jpg" />

      <div>
        <strong>Hallå!</strong>
        <p>
          Jag är en nätverkare, en doer och en passionerad problemlösare. På
          jobbet kallas jag UX designer. Och så älskar jag havet.
        </p>
      </div>
    </div>
    <divider class="divider" />
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

@media screen and (max-width: 900px) {
  .presentationContainer {
    grid-template-columns: 1fr;
    margin-top: 5rem;
  }
}
</style>