<script>

  import gsap from "gsap";
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
  import { onMount } from "svelte";
  
  import TextAnimation from "./jsContent/gsap/textFly";

  import { ChevronDownOutline, UserRemoveOutline, RedditSolid, InstagramSolid, YoutubeSolid } from "flowbite-svelte-icons";

  



  onMount(()=>{
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#page1 #box",{
        scale:0,
        delay:1,
        duration:1,
        rotate:360,
        scrollTrigger:{
            trigger:"#page1 #box",
            scroller:"#app-content-scroller",
            start:"top 40%",
            end:"top 50%",
            scrub:2,
            markers:true
        }
    })

    // I want to use it here.
    const p2LeftAnimation = new TextAnimation("#page2", "h1");
    p2LeftAnimation.textSlideRight();
    const p2RightAnimation = new TextAnimation("#page2", "h2");
    p2RightAnimation.textSlideLeft();


    const p3LeftAnimation = new TextAnimation("#page3", ".yt");
    p3LeftAnimation.textSlideRight();
    const p3RightAnimation = new TextAnimation("#page3", ".insta");
    p3RightAnimation.textSlideLeft();

    const p3DownAnimation = new TextAnimation("#page3", ".reddit");
    p3DownAnimation.textSlideLeft();


  })

</script>

<main >

  <div id="page1">
    <div id="box"></div>
  </div>

  <div id="page2">
   
    <h1 class="text-6xl font-extrabold text-amber-400"><a href="https://www.linkedin.com/in/kunal-pathak-162929237/">Kunal</a></h1>
    <h2 class="text-4xl font-extrabold text-blue-600"><a href="https://github.com/Kp270705">Follow me, guys!</a></h2>

  </div>

  <div id="page3">

    <!-- <h3 class="yt text-3xl font-extrabold text-red-500">Youtube</h3> -->
     <YoutubeSolid class=" yt h-14 w-12 text-red-500 dark:text-red-500 shrink-0"/>

    <!-- <h3 class="insta text-3xl font-extrabold text-pink-500">Instagram</h3> -->
    <InstagramSolid class=" insta h-14 w-12 text-pink-500 dark:text-pink-500 shrink-0"/>
    
    <!-- <h3 class="reddit text-3xl font-extrabold text-orange-600">Reddit</h3> -->
    <RedditSolid class=" reddit h-14 w-12 text-orange-600 dark:text-orange-600 shrink-0"/>

  </div>

</main>

<style>

  main {
    height: 100vh;
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