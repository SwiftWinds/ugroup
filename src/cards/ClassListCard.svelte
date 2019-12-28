<script>
  import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
    Actions,
    ActionButtons,
    ActionIcons,
  } from '@smui/card';
  import Button, { Label } from '@smui/button';
  import IconButton, { Icon } from '@smui/icon-button';

  function doAction(action) {
    alert('You did an action: ' + action);
  }
</script>

<Card style="width: 360px;">
  <PrimaryAction on:click={() => doAction('openItemPage')}>
    <Media
      style="background-image:
      url(https://via.placeholder.com/320x180.png?text=16x9);"
      aspectRatio="16x9">
      <MediaContent>
        <div style="color: #fff; position: absolute; bottom: 16px; left: 16px;">
          <h2 class="mdc-typography--headline6" style="margin: 0;">
            Glorious Item
          </h2>
          <h3 class="mdc-typography--subtitle2" style="margin: 0;">
            People are saying you need to buy it.
          </h3>
        </div>
      </MediaContent>
    </Media>
    <Content class="mdc-typography--body2">
      This item is so glorious that you would have to be some kind of fool to
      not immediately buy it.
    </Content>
  </PrimaryAction>
  <Actions>
    <ActionButtons>
      <Button on:click={() => doAction('addToCart')}>
        <Label>Add to Card</Label>
      </Button>
      <Button on:click={() => doAction('buyNow')}>
        <Label>Buy Now</Label>
      </Button>
    </ActionButtons>
    <ActionIcons>
      <IconButton
        on:click={() => doAction('addToFavoritesToggle')}
        toggle
        aria-label="Add to favorites"
        title="Add to favorites">
        <Icon class="material-icons" on>favorite</Icon>
        <Icon class="material-icons">favorite_border</Icon>
      </IconButton>
      <IconButton
        class="material-icons"
        on:click={() => doAction('share')}
        title="Share">
        share
      </IconButton>
    </ActionIcons>
  </Actions>
</Card>
