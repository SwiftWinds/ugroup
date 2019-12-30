<style>
  .center {
    display: flex;
    justify-content: center;
  }
</style>

<script>
  import './Navbar.scss';
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';
  import { Icon } from '@smui/common';

  import firebase, { firestore, app, loggedIn } from '../firebase.js';

  import {
    mdiUndo,
    mdiRedo,
    mdiContentSave,
    mdiShuffle,
    mdiPower,
    mdiCallSplit,
  } from '@mdi/js';

  const login = async () => {
    const authProvider = new firebase.auth.GoogleAuthProvider();
    const result = await app.auth().signInWithPopup(authProvider);
    const {
      uid,
      email,
      emailVerified,
      phoneNumber,
      displayName,
      photoURL,
    } = result.user;
    await firestore
      .collection('users')
      .doc(uid)
      .set({
        email,
        emailVerified,
        phoneNumber,
        displayName,
        photoURL,
      });
    console.log(`we did it! firestore: ${firestore}, uid: ${uid}`);
  };

  const logout = async () => {
    await firebase.auth().signOut();
  };
</script>

<TopAppBar variant="static" class="demo-top-app-bar mdc-elevation--z4">
  <Row>
    <Section align="start" toolbar>
      <div class="title">
        <Title href="/" class="mdc-theme--primary">μGroup</Title>
      </div>
    </Section>
    <div class="center">
      <Section toolbar>
        <IconButton href="https://twitter.com/SciActive">
          <Icon>
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#FFFFFF" d="{mdiUndo}"></path>
            </svg>
          </Icon>
        </IconButton>
        <IconButton href="https://github.com/hperrin/svelte-material-ui">
          <Icon>
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#FFFFFF" d="{mdiRedo}"></path>
            </svg>
          </Icon>
        </IconButton>
      </Section>
    </div>
    <Section align="end" toolbar>
      <IconButton href="https://twitter.com/SciActive">
        <Icon>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="#FFFFFF" d="{mdiContentSave}"></path>
          </svg>
        </Icon>
      </IconButton>
      <IconButton href="https://github.com/hperrin/svelte-material-ui">
        <Icon>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="#FFFFFF" d="{mdiShuffle}"></path>
          </svg>
        </Icon>
      </IconButton>
      <IconButton href="https://github.com/hperrin/svelte-material-ui">
        <Icon>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="#FFFFFF" d="{mdiCallSplit}"></path>
          </svg>
        </Icon>
      </IconButton>
      <IconButton style="margin:0" on:click="{$loggedIn ? logout : login}">
        <Icon>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="#FFFFFF" d="{mdiPower}"></path>
          </svg>
        </Icon>
      </IconButton>
    </Section>
  </Row>
</TopAppBar>
