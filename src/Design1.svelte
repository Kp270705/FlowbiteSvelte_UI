<script>

  import gsap from "gsap";

  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

  import { onMount } from "svelte";


  onMount(()=>{
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#page1 #box",{
      scale:0,
      delay:1,
      duration:2,
      rotate:360,
    })

    gsap.from("#page2 h1",{
      delay:1,
      opacity:0,
      duration:2,
      x:500,
      scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        // scrub:2,
        // pin:true,
      }
    })
    gsap.from("#page2 h2",{
      delay:1,
      opacity:0,
      duration:2,
      x:-500,
      scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
      }
    })

    gsap.from("#page3 .yt",{
      delay:1,
      opacity:0,
      duration:2,
      x:500,
      scrollTrigger:{
        trigger:"#page3 .yt",
        scroller:"body",
        markers:true,
        start:"top 60%",
      }
    })
    gsap.from("#page3 .insta",{
      delay:1,
      opacity:0,
      duration:2,
      x:-500,
      scrollTrigger:{
        trigger:"#page3 .insta",
        scroller:"body",
        markers:true,
        start:"top 60%",
      }
    })
    gsap.from("#page3 .reddit",{
      delay:1,
      opacity:0,
      duration:2,
      y:-500,
      scrollTrigger:{
        trigger:"#page3 .reddit",
        scroller:"body",
        markers:true,
        start:"top 60%",
      }
    })

    
  })

</script>

<main>

  <div id="page1">
    <div id="box"></div>
  </div>

  <div id="page2">
   
    <h1 class="text-6xl font-extrabold text-amber-400">Kunal</h1>
    <h2 class="text-4xl font-extrabold text-blue-600">Follow me, guys!</h2>

  </div>

  <div id="page3">
    <h3 class="yt text-3xl font-extrabold text-red-500">Youtube</h3>
    <h3 class="insta text-3xl font-extrabold text-pink-500">Instagram</h3>
    <h3 class="reddit text-3xl font-extrabold text-orange-600">Reddit</h3>
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
    background-color: aquamarine;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #page2{
    height: 100%;
    width: 100%;
    background-color: lightcoral;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
  }

  #page3{
    height: 100%;
    width: 100%;
    background-color: lightcyan;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;

  }


  #box{
    height: 200px;
    width: 200px;
    background-color: brown;
  }

</style> 