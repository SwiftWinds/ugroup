import { writable } from 'svelte/store';

const createStudentSelected = () => {
  const { subscribe, update } = writable(false);

  return {
    subscribe,
    toggleSelected: () => update((selected) => !selected),
  };
};

export default createStudentSelected();
