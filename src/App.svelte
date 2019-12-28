<script>
  import Navbar from './navbar/Navbar.svelte';
  import {
    BlacklistCard,
    ClassListCard,
    SavedGroupsCard,
    GroupCard,
  } from './cards';
  import { CardGrid, GroupGrid } from './grids';
  import studentSelected from './stores/student-selected-store.js';
  import groups from './stores/groups-store.js';
</script>

<Navbar />

<main>
  <CardGrid>
    <ClassListCard />
    {#if $studentSelected}
      <SavedGroupsCard />
    {:else}
      <BlacklistCard />
    {/if}
  </CardGrid>
  <GroupGrid>
    {#each $groups as group, index}
      <GroupCard {group} {index} />
    {/each}
  </GroupGrid>
</main>
