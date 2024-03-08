<template>
  <header>
    <div class="base-container">
      <h1>LH's To-do App 🐢</h1>
      <nav>
        <ul>
          <li><NuxtLink to="/">Todo</NuxtLink></li>
          <li><NuxtLink to="/done">Done</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style lang="postcss" scoped>
header {
  @apply w-full bg-sky-800;
}
.base-container {
  @apply max-w-4xl mx-auto text-white flex flex-col justify-around items-center h-28 py-3;
  @apply sm:h-16 sm:flex-row;
}
h1 {
  @apply text-2xl font-bold;
}

ul {
  @apply w-36 flex justify-between items-center;
}

li,
a {
  @apply text-xl;
}

.router-link-active {
  @apply font-semibold border-b-2 border-dashed;
}
</style>