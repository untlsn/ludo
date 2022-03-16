<script lang="ts" setup="">
defineProps<{
  left: number,
  top: number,
}>();
</script>

<template>
  <div
    class="absolute text-5xl rounded-full bg-gray-400 w-2/30 h-2/30"
    :style="{ top: `${top * 6}vmin`, left: `${left * 6}vmin` }"
  />
</template>
