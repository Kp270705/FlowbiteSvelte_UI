<script>
  import { Avatar, Dropdown, DropdownHeader, DropdownItem, Tooltip } from "flowbite-svelte";
  export let src;

</script>

<div class="flex space-x-4 rtl:space-x-reverse">
  <!-- <Avatar src={src.girl1} cornerStyle="rounded" /> -->

  {#each Object.entries(src) as [key, value]}
  <Avatar src={value} alt={key} cornerStyle="rounded" class="w-12 h-12 mx-25" />
  <!-- give wide spread spacing between avatars -->
  {/each}


</div>