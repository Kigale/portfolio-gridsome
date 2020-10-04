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
        <br />
        <a href="https://www.linkedin.com/in/lukasriedel/" target="_blank"
          >LinkedIn</a
        >
        <br />
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 160px;
  max-width: 1640px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  &__links {
    margin-left: 20px;
    font-size: 1.5rem;
  }
  &__back {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
    svg {
      margin: auto;
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
    height: 80px;
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
