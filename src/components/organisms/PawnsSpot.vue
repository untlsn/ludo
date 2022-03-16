<script lang="ts" setup="">
import SpotCell from '~/components/atoms/SpotCell.vue';
const props = defineProps<{
  color: string,
  area: number
}>();

const plus = computed(() => {
  return {
    top: props.area < 3 ? 0 : 9,
    left: props.area % 2 == 1 ? 0 : 9,
  };
});
</script>

<template>
  <div class="p-1/10" :style="{ 'background-color': color, 'grid-area': `s${area}` }">
    <div class="bg-white grid grid-cols-2 grid-rows-2 h-full w-full rounded-xl items-center justify-items-center">
      <SpotCell
        v-for="index in 4"
        :key="index"
        :left="4 + plus.left"
        :top="1 + plus.top"
      />
      <SpotCell
        v-for="index in 4"
        :key="index"
        :left="1 + plus.left"
        :top="1 + plus.top"
      />
      <SpotCell
        v-for="index in 4"
        :key="index"
        :left="4 + plus.left"
        :top="4 + plus.top"
      />
      <SpotCell
        v-for="index in 4"
        :key="index"
        :left="1 + plus.left"
        :top="4 + plus.top"
      />
    </div>
  </div>
</template>
