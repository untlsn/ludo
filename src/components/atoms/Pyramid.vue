<script lang="ts" setup="">
const colors = ['#07A14D','#FFDD07','#EE1F29','#27429A'];
</script>

<template>
  <div class="w-full h-full overflow-hidden">
    <div class="grid grid-cols-2 grid-rows-2 w-full h-full transform -rotate-45 scale-150">
      <div
        v-for="color in colors"
        :key="color"
        class="w-full h-full"
        :style="{ 'background-color': color }"
      />
    </div>
  </div>
</template>
