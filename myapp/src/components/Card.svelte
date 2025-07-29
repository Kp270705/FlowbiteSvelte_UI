<!-- e-commerce card section: -->

<script>
  import { Card, Button, Rating, Badge } from "flowbite-svelte";
  export let img;
  export let title;
  export let rating;
  export let price;
  console.log("Card component props:", { img, title, rating, price });
</script>

<div class="card-display ml-15 mt-10">
<Card class="p-0 w-80">
  <a href="/" class="block h-[200px] w-full overflow-hidden">
    <img
      src={img}
      alt="product"
      class="h-full w-full object-contain"
    />
  </a>
  <div class="px-5 pb-5">
    <a href="/">
      <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
    </a>
    <Rating rating={rating} size={24} class="mt-2.5 mb-5">
      {#snippet text()}
        <Badge class="ms-3">{rating}</Badge>
      {/snippet}
    </Rating>
    <div class="flex items-center justify-between">
      <span class="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
      <Button href="/">Buy now</Button>
    </div>
  </div>
</Card>
</div>


<style>
.card-display {
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), 
    box-shadow 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
    will-change: transform, box-shadow;
}

.card-display:hover {
  transform: scale(1.13) translateY(-10px);
  box-shadow: 0 18px 40px 0 rgba(0,0,0,0.15), 0 1.5px 3px 0 rgba(0,0,0,0.08);
  z-index: 10;
}

/* Optional: adds a soft shadow at rest, for better contrast */
.card-display {
  box-shadow: 0 4px 16px 0 rgba(0,0,0,0.07);
}
</style>