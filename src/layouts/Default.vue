<template>
  <div>
    <header class="header">
      <strong>
        <div v-if="showNavigation">
          <g-link to="/" class="header__back"> <back />Back </g-link>
        </div>
        <h1 v-else>{{ $static.metadata.siteName }}</h1>
      </strong>
      <nav class="header__links" v-if="showNavigation === false">
        <a href="mailto:lukas.riedel@gmail.com">Email</a>
        <br class="notOnSmallDevice" />
        <a href="https://www.linkedin.com/in/lukasriedel/" target="_blank"
          >LinkedIn</a
        >
        <br class="notOnSmallDevice" />
        <a href="tel:+46705954749">+46 70 595 47 49</a>
      </nav>
    </header>
    <slot />
  </div>
</template>

<script>
import back from "~/assets/back.svg";
export default {
  props: {
    showNavigation: { default: true },
  },
  components: {
    back,
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.header {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 160px;
  max-width: $maxContentWidth;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  &__links {
    font-size: 1.5rem;
    justify-self: end;
  }
  &__back {
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
    svg {
      margin: auto;
      height: 2rem;
    }
  }
  strong {
    a {
      font-size: 2.25rem;
      text-decoration: none;
    }
  }
}

@media screen and (max-width: $tablet) {
  .header {
    grid-template-columns: 1fr;
    height: 80px;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 1rem;
    &__links {
      margin-top: 0.5rem;
      justify-self: start;
      display: flex;
      flex-wrap: wrap;
      * {
        margin-right: 1rem;
      }
      :last-child {
        margin-right: 0;
      }
    }
    strong {
      a {
        font-size: 2rem;
      }
    }
    &__back {
      grid-column-gap: 0.5rem;
      svg {
        height: 16px;
      }
    }
  }
}
</style>
