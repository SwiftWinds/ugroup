<style>
  .center {
    display: flex;
    justify-content: center;
  }
</style>

<script>
  import './Navbar.scss';
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import IconButton from '../buttons/IconButton.svelte';
  import AuthButton from '../buttons/AuthButton.svelte';

  import firebase, { firestore, app, loggedIn } from '../firebase.js';

  import {
    mdiUndo,
    mdiRedo,
    mdiContentSave,
    mdiShuffle,
    mdiCallSplit,
  } from '@mdi/js';
</script>

<TopAppBar variant="static" class="mdc-elevation--z4">
  <Row>
    <Section align="start" toolbar>
      <div class="title">
        <Title href="/" class="mdc-theme--primary">μGroup</Title>
      </div>
    </Section>
    <div class="center">
      <Section toolbar>
        <IconButton icon="{mdiUndo}" />
        <IconButton icon="{mdiRedo}" />
      </Section>
    </div>
    <Section align="end" toolbar>
      <IconButton icon="{mdiContentSave}" />
      <IconButton icon="{mdiShuffle}" />
      <IconButton icon="{mdiCallSplit}" />
      <AuthButton />
    </Section>
  </Row>
</TopAppBar>
