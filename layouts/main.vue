<template>
  <div id="wrapper">

    <main>
      <slot name="addTaskForm"/>
      <h2>
        <slot name="heading" />
      </h2>
      <ul>
        <slot />
      </ul>
    </main>
  </div>
</template>

<style lang="postcss" scoped>

</style>