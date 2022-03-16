import { defineStore } from 'pinia';

const createPawns = (top = 0, left = 0) => [
  { left: 1 + left, top: 1 + top },
  { left: 1 + left, top: 4 + top },
  { left: 4 + left, top: 1 + top },
  { left: 4 + left, top: 4 + top },
];

const useStore = defineStore('store', {
  state: () => ({
    players: {
      green: {
        pawns: createPawns(),
        color: '#07A14D',
      },
      yellow: {
        pawns: createPawns(0, 9),
        color: '#FFDD07',
      },
      red: {
        pawns: createPawns(9, 0),
        color: '#EE1F29',
      },
      blue: {
        pawns: createPawns(9, 9),
        color: '#27429A',
      },
    },
  }),
});

export default useStore;
