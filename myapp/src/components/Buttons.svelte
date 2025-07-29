<script>
  import { Button } from "flowbite-svelte";
    import { GradientButton } from "flowbite-svelte";
    export let onClick;

    let colors = ["blue", "green", "red", "pink", "purple", "cyan", "teal", "lime"];
</script>


<GradientButton color="blue" onclick={onClick}>Blue</GradientButton>
<GradientButton color="green" onclick={onClick}>Green</GradientButton>
<GradientButton color="red" onclick={onClick}>Red</GradientButton>
<GradientButton color="pink" onclick={onClick}>Pink</GradientButton>
<GradientButton color="purple" onclick={onClick}>Purple</GradientButton>
<GradientButton color="cyan" onclick={onClick}>Cyan</GradientButton>
<GradientButton color="teal" onclick={onClick}>Teal</GradientButton>
<GradientButton color="lime" onclick={onClick}>Lime</GradientButton>

