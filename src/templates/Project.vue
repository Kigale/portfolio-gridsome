<template>
  <Layout>
    <div class="coverimage">
      <g-image :src="$page.project.coverImage" />
    </div>
    <div class="projectContent" v-html="$page.project.content" />
  </Layout>
</template>

<page-query>
query project($path: String!) {
    project: project(path: $path){
        title
        content
        coverImage (blur: 5)
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
.intro {
  font-style: italic;
  margin-top: 2rem;
  margin-bottom: 3rem;
}
.coverimage {
  width: 100vw;
  height: 100%;
  object-fit: cover;
}
.projectContent {
  background: var(--bg-color);
  max-width: var(--content-width);
  margin: -100px auto 0;
  padding: var(--space);
  img {
    width: calc(100% + var(--space) * 2);
    max-width: none;
    margin-left: calc(var(--space) * -1);
  }
}
</style>