<script>

</script>

<main>
    <div class="hero p-1.5 ">
        <!-- Main Content -->
        <h1 class="text-2xl font-bold mb-4">Design 3</h1>

        <p id="section1" class="mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
        </p>

        <p id="section2" class="mb-6">
        Section 2 content goes here. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
        </p>

        <p id="section3" class="mb-6">
        Section 3 content. Pellentesque in ipsum id orci porta dapibus.
        </p>

        {#each Array(10).fill(0) as _, i}
        <p class="mb-4">This is filler line {i + 1} for scrolling test...</p>
        {/each}
    </div>
</main>

<style>
    main {
        height: 100vh;
    }
    .hero{
        height: 100%;
    }
</style>

