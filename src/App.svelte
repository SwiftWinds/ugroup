<script>
  import Navbar from './navbar/Navbar.svelte'
  import {
    BlacklistCard,
    ClassListCard,
    SavedGroupsCard,
    GroupCard,
  } from './cards'
  import { CardGrid, GroupGrid } from './grids'

  let groups = [
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
  ]

  let studentSelected = false
</script>

<Navbar />

<main>
  <CardGrid>
    <ClassListCard />
    {#if studentSelected}
      <SavedGroupsCard />
    {:else}
      <BlacklistCard />
    {/if}
  </CardGrid>
  <GroupGrid>
    {#each groups as group, index}
      <GroupCard {group} {index} />
    {/each}
  </GroupGrid>
</main>
