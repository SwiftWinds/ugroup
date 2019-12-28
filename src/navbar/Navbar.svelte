<script>
  import './Navbar.scss';
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';
  import { Icon } from '@smui/common';

  import {
    mdiUndo,
    mdiRedo,
    mdiContentSave,
    mdiShuffle,
    mdiPower,
    mdiCallSplit,
  } from '@mdi/js';
</script>

<style>
  .center {
    display: flex;
    justify-content: center;
  }
</style>

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
              <path fill="#FFFFFF" d={mdiUndo} />
            </svg>
          </Icon>
        </IconButton>
        <IconButton href="https://github.com/hperrin/svelte-material-ui">
          <Icon>
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#FFFFFF" d={mdiRedo} />
            </svg>
          </Icon>
        </IconButton>
      </Section>
    </div>
    <Section align="end" toolbar>
      <IconButton href="https://twitter.com/SciActive">
        <Icon>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="#FFFFFF" d={mdiContentSave} />
          </svg>
        </Icon>
      </IconButton>
      <IconButton href="https://github.com/hperrin/svelte-material-ui">
        <Icon>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="#FFFFFF" d={mdiShuffle} />
          </svg>
        </Icon>
      </IconButton>
      <IconButton href="https://github.com/hperrin/svelte-material-ui">
        <Icon>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="#FFFFFF" d={mdiCallSplit} />
          </svg>
        </Icon>
      </IconButton>
      <IconButton href="./">
        <Icon>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="#FFFFFF" d={mdiPower} />
          </svg>
        </Icon>
      </IconButton>
    </Section>
  </Row>
</TopAppBar>
