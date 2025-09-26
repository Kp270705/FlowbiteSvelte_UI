<script>

  import gsap from "gsap";
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
  import { onMount } from "svelte";
  
  import TextAnimation from "./jsContent/gsap/textFly";



  onMount(()=>{
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#page1 #box",{
        scale:0,
        delay:1,
        duration:1,
        rotate:360,
        scrollTrigger:{
            trigger:"#page1 #box",
            scroller:"body",
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

    <!-- <h3 class="reddit text-3xl font-extrabold text-orange-600">Reddit</h3> -->

    <p class="text-3xl font-medium p-10 reddit">Reddit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, tempora veritatis assumenda sunt officiis ratione illum fugit molestiae praesentium esse consectetur dolorem repellat tempore rerum ducimus quis nihil veniam odio excepturi aliquam, exercitationem consequuntur tenetur minima? In neque et, doloremque atque vitae voluptatem! Voluptatibus ab assumenda, illum facilis voluptatem tenetur tempore consectetur architecto, esse nulla facere, dolorem eaque dolores veniam. Quaerat blanditiis voluptas deleniti quia impedit sint delectus voluptatum, maxime ex sed ducimus necessitatibus, nesciunt, quo ipsum asperiores nemo nisi cupiditate provident repellat eius ullam dignissimos reiciendis obcaecati deserunt. Assumenda neque quas provident fugiat vero consequatur dolorem consequuntur explicabo ipsum?</p>
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