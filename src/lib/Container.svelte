<script>
  import Card from "./Card.svelte";

  export let index = 0;
  export let locations;
</script>

<div class="grid place-items-center items-end w-full max-w-lg mb-4">
  {#each locations as location, i}
    {#if i === index}
      <Card {location}></Card>
    {/if}
  {/each}
</div>
