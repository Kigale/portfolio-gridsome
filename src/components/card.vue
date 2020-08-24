<template>
  <div class="card">
    <div class="aspect-ratio">
      <g-link :to="carddata.path">
        <g-image :src="carddata.coverImage" width="1000" />
      </g-link>
    </div>
    <h2>
      <g-link :to="carddata.path">{{ carddata.title }}</g-link>
    </h2>
    <h3>{{ carddata.company }}</h3>
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
</style>