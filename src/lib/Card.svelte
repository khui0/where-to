<script>
    import { fade } from "svelte/transition";

    export let location;
</script>

<div
    in:fade
    out:fade
    class="card bg-base-200 shadow-xl col-start-1 row-start-1"
>
    <div class="card-body">
        <h2 class="card-title">{location.name}</h2>
        <p>{"$".repeat(location.price)}</p>
        <p>{location.description}</p>
        <p><i class="bi bi-map"></i> {location.location}</p>
        <p>
            <i class="bi bi-geo-alt"></i>
            <a
                href="http://maps.apple.com/?q={encodeURIComponent(
                    location.address,
                )}"
                target="_blank"
                rel="noopener noreferrer">{location.address}</a
            >
        </p>
        <p><i class="bi bi-clock"></i> {location.travelTime} min</p>
        <div class="card-actions justify-end">
            {#each location.orderingOptions as option}
                <div class="badge badge-outline">{option}</div>
            {/each}
        </div>
    </div>
</div>
