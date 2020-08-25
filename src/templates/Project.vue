<template>
  <ProjectLayout>
    <p>{{$page.project.title}}</p>
    <div class="projectWrapper" v-html="$page.project.content" />
  </ProjectLayout>
</template>

<page-query>
query project($path: String!) {
    project: project(path: $path){
        title
        content
    }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.project.title,
    };
  },
};
</script>

<style lang="scss">
.projectWrapper {
  width: 720px;
  margin: auto;
  img {
    width: 920px;
    max-width: none;
    margin: 0 -100px;
  }
}
</style>