<script lang="ts" setup="">
import SpotCell from '~/components/atoms/SpotCell.vue';
defineProps<{
  color: string,
  area: string
}>();
</script>

<template>
  <div class="p-1/10" :style="{ 'background-color': color, 'grid-area': area }">
    <div class="bg-white grid grid-cols-2 grid-rows-2 h-full w-full rounded-xl items-center justify-items-center">
      <SpotCell v-for="index in 4" :key="index" />
    </div>
  </div>
</template>
