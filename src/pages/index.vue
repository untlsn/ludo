<script setup lang="ts">
import PawnsSpot from '~/components/organisms/PawnsSpot.vue';
import BoardCell from '~/components/atoms/BoardCell.vue';

const colors = ['#07A14D','#FFDD07','#EE1F29','#27429A'];

const isGreen = (num: number) => {
  const inside = [20, 32, 33, 34, 35, 36];
  return inside.includes(num) ? colors[0] : isYellows(num);
};
const isYellows = (num: number) => {
  const inside = [5, 6, 8, 11, 14, 17];
  return inside.includes(num) ? colors[1] : isRed(num);
};
const isRed = (num: number) => {
  const inside = [56, 59, 62, 65, 67, 68];
  return inside.includes(num) ? colors[2] : isBlue(num);
};
const isBlue = (num: number) => {
  const inside = [37, 38, 39, 40, 41, 53];
  return inside.includes(num) ? colors[3] : 'white';
};

</script>

<template>
  <div class="h-screen w-screen bg-gray-200 flex items-center justify-center">
    <div class="bg-gray-400 grid grid-cols-15 grid-rows-15 board h-[90vmin] w-[90vmin] rounded-xl overflow-hidden">
      <PawnsSpot
        v-for="(color, index) in colors"
        :key="color"
        :color="color"
        :area="`s${index+1}`"
      />
      <BoardCell
        v-for="index in 72"
        :key="index"
        :style="{ 'background-color': isGreen(index) }"
      />
      <div style="grid-area: s5" />
    </div>
  </div>
</template>

<style>
.board {
  grid-template-areas:
    "s1 s1 s1 s1 s1 s1 .  .  .  s2 s2 s2 s2 s2 s2"
    "s1 s1 s1 s1 s1 s1 .  .  .  s2 s2 s2 s2 s2 s2"
    "s1 s1 s1 s1 s1 s1 .  .  .  s2 s2 s2 s2 s2 s2"
    "s1 s1 s1 s1 s1 s1 .  .  .  s2 s2 s2 s2 s2 s2"
    "s1 s1 s1 s1 s1 s1 .  .  .  s2 s2 s2 s2 s2 s2"
    "s1 s1 s1 s1 s1 s1 .  .  .  s2 s2 s2 s2 s2 s2"
    ".  .  .  .  .  .  s5 s5 s5 .  .  .  .  .  ."
    ".  .  .  .  .  .  s5 s5 s5 .  .  .  .  .  ."
    ".  .  .  .  .  .  s5 s5 s5 .  .  .  .  .  ."
    "s3 s3 s3 s3 s3 s3 .  .  .  s4 s4 s4 s4 s4 s4"
    "s3 s3 s3 s3 s3 s3 .  .  .  s4 s4 s4 s4 s4 s4"
    "s3 s3 s3 s3 s3 s3 .  .  .  s4 s4 s4 s4 s4 s4"
    "s3 s3 s3 s3 s3 s3 .  .  .  s4 s4 s4 s4 s4 s4"
    "s3 s3 s3 s3 s3 s3 .  .  .  s4 s4 s4 s4 s4 s4"
    "s3 s3 s3 s3 s3 s3 .  .  .  s4 s4 s4 s4 s4 s4"
}
</style>
