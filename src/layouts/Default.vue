<template>
  <div class="layout">
    <header class="header contentBig">
      <strong>
        <div v-if="showNavigation">
          <back />
          <g-link to="/">Back</g-link>
        </div>
        <h1 v-else>{{ $static.metadata.siteName }}</h1>
      </strong>
      <nav class="nav">
        <a href="mailto:lukas.riedel@gmail.com" class="nav__link">Email</a>
        <br />
        <a
          href="https://www.linkedin.com/in/lukasriedel/"
          class="nav__link"
          target="_blank"
        >LinkedIn</a>
        <br />
        <a href="tel:+46705954749" class="nav__link">+46 70 595 47 49</a>
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
  strong {
    a {
      font-size: 2.25rem;
      text-decoration: none;
    }
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 160px;
}

.nav__link {
  margin-left: 20px;
  font-size: 1.5rem;
}
</style>
