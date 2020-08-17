<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <a href="mailto:lukas.riedel@gmail.com" class="nav__link">Email</a>
        <a
          href="https://www.linkedin.com/in/lukasriedel/"
          class="nav__link"
          target="_blank"
        >LinkedIn</a>
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

<style>
</style>
