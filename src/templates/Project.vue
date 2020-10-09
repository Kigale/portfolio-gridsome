<template>
  <Layout>
    <div class="coverimage">
      <g-image :src="$page.project.coverImage" />
    </div>
    <div class="projectContent">
      <h1 class="project">{{ $page.project.title }}</h1>
      <p class="intro">{{ $page.project.intro }}</p>
      <div class="projectWrapper" style="margin-bottom: 5rem">
        <hr />
        <div class="projectData">
          <div>
            <h3>Client</h3>
            <p>{{ $page.project.company }}</p>
          </div>
          <div>
            <h3>Responsibilities</h3>
            <p>{{ $page.project.responsibilities }}</p>
          </div>
        </div>
        <hr />
      </div>
      <div v-html="$page.project.content"></div>
    </div>
  </Layout>
</template>

<page-query>
query project($path: String!) {
    project: project(path: $path){
        title
        content
        company
        coverImage (quality: 90)
        intro
        responsibilities
    }
}
</page-query>

<script>
export default {
  props: ["carddata"],
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
  margin-bottom: 5rem;
}
.coverimage {
  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
  @media (orientation: portrait) {
    img {
      height: 50vh;
    }
  }
}
.projectData {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  div {
    p {
      margin: 0;
      padding: 0;
    }
  }
}
.projectContent {
  div.projectWrapper,
  p,
  h1,
  h2 {
    margin-left: auto;
    margin-right: auto;
    max-width: var(--content-width);
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
video {
  width: 100%;
}
figure,
video,
.projectVideo {
  display: block;
  margin: 7rem auto;
  max-width: calc(var(--content-width) + 2 * var(--space));
  padding-left: 0rem;
  padding-right: 0rem;
  figcaption {
    display: none;
  }
}
blockquote {
  max-width: var(--content-width);
  font-size: 1.5rem;
  padding: 7rem 4rem;
  margin-left: auto;
  margin-right: auto;
  p {
    margin-top: 1rem;
    text-align: right;
    color: var(--subtitle-color);
  }
}
</style>