<script>
  import "./Navbar.scss";
  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";
  import { Icon } from "@smui/common";

  import {
    mdiUndo,
    mdiRedo,
    mdiContentSave,
    mdiShuffle,
    mdiPower,
    mdiCallSplit
  } from "@mdi/js";
</script>

<TopAppBar variant="static" class="demo-top-app-bar mdc-elevation--z4">
  <Row>
    <Section align="start">
      <Title href="/" class="mdc-theme--primary">μGroup</Title>
    </Section>
    <Section align="middle" toolbar>
      <IconButton href="https://twitter.com/SciActive">
        <Icon>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="#000000" d={mdiUndo} />
          </svg>
        </Icon>
      </IconButton>
      <IconButton href="https://github.com/hperrin/svelte-material-ui">
        <Icon>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="#000000" d={mdiRedo} />
          </svg>
        </Icon>
      </IconButton>
    </Section>
    <Section align="end" toolbar>
      <IconButton href="https://twitter.com/SciActive">
        <Icon>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="#000000" d={mdiContentSave} />
          </svg>
        </Icon>
      </IconButton>
      <IconButton href="https://github.com/hperrin/svelte-material-ui">
        <Icon>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="#000000" d={mdiShuffle} />
          </svg>
        </Icon>
      </IconButton>
      <IconButton href="https://github.com/hperrin/svelte-material-ui">
        <Icon>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="#000000" d={mdiCallSplit} />
          </svg>
        </Icon>
      </IconButton>
      <IconButton href="https://github.com/hperrin/svelte-material-ui">
        <Icon>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="#000000" d={mdiPower} />
          </svg>
        </Icon>
      </IconButton>
    </Section>
  </Row>
</TopAppBar>
