<template>
  <Layout>
    <presentation />
    <div class="wrapper">
      <card
        v-for="projects in $page.projects.edges"
        :key="projects.id"
        v-bind:carddata="projects.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query Projects{
  projects: allProject (sortBy: "order" order: ASC){
    edges{
      node{
        id
        title
        path
        order
        company
        coverImage
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
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 50px;
}
@media screen and (max-width: 1240px) {
  .wrapper {
    grid-template-columns: auto;
  }
}
</style>