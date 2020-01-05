<script>
  import IconButton from '@smui/icon-button';
  import { Icon } from '@smui/common';
  export let icon;
</script>

<IconButton style="margin:0" on:click>
  <Icon>
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <path fill="#FFFFFF" d="{icon}"></path>
    </svg>
  </Icon>
</IconButton>
