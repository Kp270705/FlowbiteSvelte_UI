<script>
  import { link } from "svelte-spa-router";  
  import Routes from "../../router/Routes.svelte";


  let isOpen = false;

  function toggleSidebar() {
    isOpen = !isOpen;
  }

    let pages = [
    { name: "Design1", path: "/design1" },
    { name: "Design2", path: "/design2" },
    { name: "Design3", path: "/design3" },
  ];
  
</script>

<div class="flex h-screen">
  <!-- Sidebar (desktop visible, mobile hidden) -->
  <div class={`fixed md:static top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 transform transition-transform duration-300 z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`} >
    <h2 class="text-xl font-bold mb-4">Sidebar</h2>
    <ul class="space-y-2">
      {#each pages as page}
        <li><a use:link href={page.path} class="block hover:text-gray-300">{page.name}</a></li>
      {/each}
    </ul>
  </div>

  <!-- Overlay for mobile when sidebar is open -->
  {#if isOpen}
    <div
      class="fixed inset-0 bg-black-100 bg-opacity-100 z-30 md:hidden"
      on:click={toggleSidebar}
    ></div>
  {/if}

  <!-- Content Area -->
  <div id="app-content-scroller" class={`flex-1 overflow-y-auto p-0 transition-all duration-300 ${isOpen ? "md:ml-64" : ""} overflow-x-hidden `} >
    <!-- Mobile Navbar -->
    <div class="md:hidden flex items-center justify-between mb-4">
      <button class="text-gray-800 p-2 rounded hover:bg-gray-200" on:click={toggleSidebar} >
        <!-- Hamburger Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
      <h1 class="text-xl font-bold">My App</h1>
    </div>

    <!-- Main Content -->
    <div class=" bg-pink-50 rounded shadow">
      <Routes />
    </div>
  </div>
</div>

