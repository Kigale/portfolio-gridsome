<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
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

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
header {
  strong {
    a {
      font-size: 2.25rem;
      text-decoration: none;
    }
  }
}

.layout {
  max-width: 1640px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
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
