<template>
  <Layout :show-navigation="false">
    <presentation class="indexContent" />
    <div class="wrapper indexContent">
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
  components: {
    card,
    presentation,
  },
  metaInfo: {
    title: "Portfolio",
    meta: [
      {
        property: "og:title",
        content: "Portfolio of Lukas Riedel",
      },
      {
        property: "og:description",
        content: "The design portfolio of Lukas Riedel, product designer",
      },
      {
        property: "og:image",
        content: "https://www.lukasriedel.se/portfolio.jpg",
      },
      {
        property: "og:url",
        content: "https://www.lukasriedel.se/",
      },
    ],
  },
};
</script>

<style lang=scss>
.indexContent {
  max-width: $maxContentWidth;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(505px, 1fr));
  margin-top: 10rem;
  grid-gap: 2rem;
  padding-top: 0;
  line-height: 1.25;
  h3 {
    padding: 0.75rem 0 0.5rem;
  }
}
@media screen and (max-width: $tablet) {
  .indexContent {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .wrapper {
    grid-template-columns: 1fr;
  }
}
</style>