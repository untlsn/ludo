<script setup lang="ts">
import PawnsSpot from '~/components/organisms/PawnsSpot.vue';
import BoardCell from '~/components/atoms/BoardCell.vue';
import Piramid from '~/components/atoms/Pyramid.vue';
import Pawn from '~/components/atoms/Pawn.vue';

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
  return inside.includes(num) ? colors[3] : isGray(num);
};
const isGray = (num: number) => {
  const inside = [4, 29, 44, 69];
  return inside.includes(num) ? '#b7b7b7' : 'white';
};

const isStar = (num: number) => {
  const inside = [4, 29, 44, 69, 6, 67, 53, 20];
  return inside.includes(num);
};

</script>

<template>
  <div class="h-screen w-screen bg-gray-200 flex items-center justify-center">
    <div class="bg-gray-400 grid grid-cols-15 grid-rows-15 board h-[90vmin] w-[90vmin] rounded-xl overflow-hidden relative">
      <PawnsSpot
        v-for="(color, index) in colors"
        :key="color"
        :color="color"
        :area="index+1"
      />
      <BoardCell
        v-for="index in 72"
        :key="index"
        :style="{ 'background-color': isGreen(index) }"
      >
        <p v-if="isStar(index)" class="text-center pt-3 font-bold text-white text-2xl">
          S
        </p>
      </BoardCell>
      <Piramid style="grid-area: s5" />
      <Pawn :left="4" :top="1" />
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
