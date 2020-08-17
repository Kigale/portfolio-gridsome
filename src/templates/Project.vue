<template>
  <ProjectLayout>
    <div v-html="$page.project.content" />
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
