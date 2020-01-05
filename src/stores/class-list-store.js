import { writable } from 'svelte/store';

const createClassList = () => {
  const { subscribe, update } = writable([
    'Mathew Wang',
    'Kyle Young',
    'Richard Nixon',
    'Daniel Robinson',
  ]);

  return {
    subscribe,
    addStudent: ,
  };
};

export default createClassList();
