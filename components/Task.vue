<template>
  <li class="task">
    <span
      contenteditable
      @focus="getSpanTextBeforeChange($event)"
      @focusout="changeTaskText($event)"
      :class="taskProps.done && 'done'"
      >{{ taskProps.text }}</span
    >
    <div class="actions">
      <img
        src="~/assets/images/undo.svg"
        alt="Undo the task"
        v-if="taskProps.done"
        role="button"
        @click="changeTaskStatus($event)"
      />
      <img
        src="~/assets/images/check.svg"
        alt="Mark the task as done"
        v-else
        role="button"
        @click="changeTaskStatus($event)"
      />
      <img
        src="~/assets/images/trash.svg"
        alt="Delete the task"
        role="button"
        @click="deleteTask($event)"
      />
    </div>
  </li>
</template>

<script setup lang="ts">
import { useTodoStore } from "~~/store/todo";

const emit = defineEmits(["update-todos", "update-done-tasks"]);
const props = defineProps({
  taskProps: Object,
});

const store = useTodoStore();
const { tasks } = store;

const getTaskIndexFromButton = (event) => {
  return tasks.findIndex((task) => {
    /* This code gets the task index by its text and status (checking the page the user actually is),
       preventing the user from trying to delete a task and deleting another with the exact same text,
       but with different "done" status. 
       
       @ts-ignore */
    const taskStatus = window.location.pathname == "/done" ? task.done == true : task.done == false;

    // @ts-ignore
    return task.text == event.target.parentNode.parentNode.innerText && taskStatus;
  });
};

const getTaskIndexFromSpan = (spanText) => {
   return tasks.findIndex((task) => {
    /* The same logic from the getTaskIndexFromButton function.
       @ts-ignore */
    const taskStatus = window.location.pathname == "/done" ? task.done == true : task.done == false;

    // @ts-ignore
    return task.text == spanText && taskStatus;
  });
}

const getSpanTextBeforeChange = (event) => {
  // get the text before change and make it accessible to the changeTaskText function
  spanTextBeforeChange.value = event.target.innerText;
};
const spanTextBeforeChange = ref("");

const changeTaskText = (event) => {
  const spanText = event.target.innerText;
  const taskIndex = getTaskIndexFromSpan(spanTextBeforeChange.value);
  store.changeTaskText(spanText, taskIndex);
  updateTaskList();
  event.target.innerText = spanText.trim();
};
const changeTaskStatus = (event) => {
  const taskIndex = getTaskIndexFromButton(event);
  store.changeTaskStatus(taskIndex);
  updateTaskList();
};

const deleteTask = (event) => {
  const taskIndex = getTaskIndexFromButton(event);
  store.deleteTaskFromStore(taskIndex);
  updateTaskList();
};

const updateTaskList = () => {
  if (window.location.pathname == "/done") emit("update-done-tasks");
  else emit("update-todos");
};
</script>

<style lang="postcss" scoped>
li.task {
  @apply w-full mb-2 flex items-center justify-between;
}

.done {
  @apply line-through;
  opacity: 0.8;
}

span {
  @apply text-lg;
  max-height: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
span:focus {
  outline: 0;
}
.actions {
  @apply h-full flex items-center gap-3;
}

img {
  @apply aspect-square;
  height: 95%;
}
</style>