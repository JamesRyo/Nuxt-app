<template>
  <form @submit.prevent="addTask">
    <input class="task" v-model="inputText" type="text" placeholder="Add your task" />
    <button>+</button>
  </form>
</template>

<script setup lang="ts">
const emit = defineEmits(["add-todo", "add-done-task"]);
const inputText = ref("");

const addTask = () => {
  const text = inputText.value.trim();
  const isInTheDonePage = window.location.pathname == "/done" ? true : false;

  if (text.length) {
    if (isInTheDonePage) emit("add-done-task", { text: text, done: true });
    else emit("add-todo", { text: text, done: false });
  }
  inputText.value = "";
};
</script>

<style lang="postcss" scoped>
form {
  @apply flex items-center justify-center w-full mb-6;
}
input.task {
  padding-right: 8px;
  width: clamp(250px, 80%, 400px);
}

input.task:focus {
  @apply outline-sky-800;
}

button {
  @apply bg-sky-800 aspect-square text-2xl text-white font-bold;
  height: 36px;
  margin-left: -5px;
}
</style>
