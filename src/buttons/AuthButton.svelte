<script>
  import { mdiPower } from '@mdi/js';

  import IconButton from './IconButton.svelte';

  import firebase, { firestore, app, loggedIn } from '../firebase.js';

  import pick from 'object.pick';

  import cleanDeep from 'clean-deep';

  const login = async () => {
    const authProvider = new firebase.auth.GoogleAuthProvider();
    const result = await app.auth().signInWithPopup(authProvider);
    const userProps = cleanDeep(
      pick(result.user, [
        'email',
        'emailVerified',
        'phoneNumber',
        'password',
        'displayName',
        'photoURL',
        'disabled',
      ])
    );
    await firestore
      .collection('users')
      .doc(result.user.uid)
      .set(userProps);
  };

  const logout = async () => {
    await firebase.auth().signOut();
  };
</script>

<IconButton icon="{mdiPower}" on:click="{$loggedIn ? logout : login}" />
