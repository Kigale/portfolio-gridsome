<template>
  <Layout>
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
export default {
  metaInfo: {
    title: "Portfolio",
  },
  components: {
    card,
  },
};
</script>

<style>
.wrapper {
  display: grid;
  grid-template-columns: auto auto;
}
@media screen and (max-width: 1240px) {
  .wrapper {
    grid-template-columns: auto;
  }
}
</style>


/* 

   <ul>
      <li v-for="projects in $page.projects.edges" :key="projects.id">
        <g-link :to="projects.node.path">{{ projects.node.title }}</g-link>
        <ul>
          <li>{{ projects.node.company }}</li>
          <li>{{ projects.node.coverImage }}</li>
        </ul>
      </li>
    </ul> */