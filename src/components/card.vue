<template>
  <div class="card">
    <g-link :to="carddata.path">
      <div class="aspectRatioBox">
        <g-image :src="carddata.coverImage" class="cardImage" />
      </div>
    </g-link>

    <h3>{{ carddata.company }}</h3>
    <h2>
      <g-link :to="carddata.path">{{ carddata.title }}</g-link>
    </h2>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["carddata"],
};
</script>

<style lang="scss" scoped>
.card {
  padding-bottom: 3rem;
}
.aspectRatioBox {
  position: relative;
  width: 100%;
  padding-top: 65%;
}
.cardImage {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: block;
  margin: auto;
  object-fit: cover;
}
</style>