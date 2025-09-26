<script>
  import { AccordionItem, Accordion } from "flowbite-svelte";
</script>

<Accordion>
  <AccordionItem>
    {#snippet header()}My Header 1{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">hui hui</p>
    <p class="text-gray-500 dark:text-gray-400">
      bui bui ... <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">get started</a> ... tui tui
    </p>
  </AccordionItem>
</Accordion>