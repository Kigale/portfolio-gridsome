<template>
  <Layout :show-navigation="false">
    <div class="headerheight" />

    <presentation class="contentBig" />
    <div class="wrapper contentBig">
      <card v-for="edge in $page.projects.edges" :key="edge.node.id" :carddata="edge.node" />
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

<style>
.headerheight {
  height: 160px;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(550px, 1fr));
  margin-top: 50px;
  grid-gap: 1rem;
}
/* @media screen and (max-width: 1240px) {
  .wrapper {
    grid-template-columns: auto;
  }
} */
</style>