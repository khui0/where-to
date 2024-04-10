<script>
  import { cubicOut } from "svelte/easing";
  import { scale } from "svelte/transition";

  export let location;
</script>

<div
  in:scale={{ duration: 500, easing: cubicOut }}
  out:scale={{ duration: 500, easing: cubicOut }}
  class="card bg-base-200 col-start-1 row-start-1 w-full"
>
  <div class="card-body h-80 lg:h-64">
    <h2 class="card-title text-3xl mb-2">{location.name}</h2>
    <p>{"$".repeat(location.price)} &bullet; {location.description}</p>
    <div class="flex gap-2 mb-4">
      {#each location.orderingOptions as option}
        <div class="badge badge-neutral">{option}</div>
      {/each}
    </div>
    <div class="overflow-auto space-y-2">
      <div class="flex justify-between text-neutral-content">
        <p class="flex-initial"><i class="bi bi-map"></i> {location.location}</p>
        <p class="flex-initial"><i class="bi bi-clock"></i> {location.travelTime} min</p>
      </div>
      <p class="mb-4 text-neutral-content">
        <i class="bi bi-geo-alt"></i>
        <a
          href="http://maps.apple.com/?q={encodeURIComponent(location.address)}"
          target="_blank"
          rel="noopener noreferrer">{location.address}</a
        >
      </p>
    </div>
  </div>
</div>
