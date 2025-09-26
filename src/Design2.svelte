<script>

  import gsap from "gsap";

  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

  import { onMount } from "svelte";


  onMount(()=>{
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#page2 h1", {
        transform:"translateX(-150%)",
        scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            markers:true,
            start:"top 0%",
            end:"top -150%",
            scrub:2,
            pin:true,
        }

    })
    
  })

</script>


<main>

  <div id="page1">
    <h1 class="text-4xl text-blue-500">Page 1</h1>
  </div>

  <div id="page2">
    <h1 class="pH2">Experience</h1>
  </div>

  <div id="page3">
    
  </div>

</main>

<style>

  main {
    height: 100%;
    width: 100%;
  }

  #page1{
    height: 100%;
    width: 100%;
    background-color: black;
  }
  #page2{
    height: 100%;
    width: 100%;
    background-color: lightblue;
  }
  #page3{
    height: 100%;
    width: 100%;
    background-color: black;
  }
  .pH2{
    font-size: 40vw;
    text-transform: uppercase;
  }

</style> 