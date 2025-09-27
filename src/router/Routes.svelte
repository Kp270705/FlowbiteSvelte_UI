<script>

    import Router from 'svelte-spa-router';


    import Design1 from "../Design1.svelte";
    import Design2 from "../Design2.svelte";
    import Design3 from "../Design3.svelte";

    const routes = {
        '/design1': Design1,
        '/design2': Design2,
        '/design3': Design3,
    }
</script>

<Router {routes} />