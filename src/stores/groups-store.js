import { writable } from 'svelte/store';
import { firestore } from '../firebase';

const groups = writable([
  [
    {
      id: 112042,
      name: 'Mathew Wang',
    },
    {
      id: 113113,
      name: 'Kyle Young',
    },
  ],
  [
    {
      id: 113124,
      name: 'Richard Nixon',
    },
    {
      id: 113314,
      name: 'Daniel Robinson',
    },
  ],
]);

export default groups;
