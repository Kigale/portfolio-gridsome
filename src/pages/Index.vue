<template>
  <Layout :show-navigation="false">
    <!--  <presentation class="contentBig" /> -->
    <div class="wrapper contentBig">
      <video width="800" height="600" autoplay muted loop>
        <source src="../assets/reveal.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <card
        v-for="edge in $page.projects.edges"
        :key="edge.node.id"
        :carddata="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query
  Projects{projects: allProject (sortBy: "order" order: ASC){
    edges{
      node{
        id
        title
        path
        order
        company
        coverImage (blur: 5, quality: 90)
      }
    }
  }
}
</page-query>

<script>
import card from "~/components/card.vue";
import presentation from "~/components/presentation.vue";
export default {
  metaInfo: {
    title: "Portfolio",
  },
  components: {
    card,
    presentation,
  },
};
</script>

<style lang=scss>
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(505px, 1fr));
  margin-top: 10rem;
  grid-gap: 2rem;
  max-width: $maxContentWidth;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
  line-height: 1.25;
  h3 {
    padding: 0.75rem 0 0.5rem;
  }
}
@media screen and (max-width: $tablet) {
  .wrapper {
    padding: 0 1rem;
    grid-template-columns: 1fr;
  }
}
</style>