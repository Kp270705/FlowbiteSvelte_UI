<script>
    import animateFanta from "./jsContent/gsap/fanta";
    import { RectangleListSolid } from "flowbite-svelte-icons";
    import gsap from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { onMount } from "svelte";

    // file imports:
    // import Fanta from "./assets/icons/fanta1.png"
    import Fanta from "./assets/icons/f3.png"
    import coc from "./assets/icons/coc.png"
    import pepsi from "./assets/icons/pepsi.png"
    import OrangeSlice from "./assets/icons/orngslc.png"
    import Orange from "./assets/icons/orange1.png"
    // import lemon from "./assets/icons/lemon.webp"
    import leaf1 from "./assets/icons/leaf1.png"
    import leaf2 from "./assets/icons/leaf2.png"
    import coconutLeaf from "./assets/icons/coconutLeaf1.png"
    import straw from "./assets/icons/straw1.png"

    import Card from "./components/Card.svelte";

    onMount(() =>{
        gsap.registerPlugin(ScrollTrigger)

        const identifiers = {
            fanta:".fanta",
            orangeSlc:".orngSlc",
            orange:".orange",
            leaf_1:".leaf1",
            leaf_2:".leaf2",
            frame2:".two",
            frame3:".three",
            straw:".straw",
        }
        const animate = new animateFanta(identifiers)
        animate.timeLine()
        
    })

    const panelClasses = "flex flex-col items-start justify-center gap-[5vh] w-1/2 h-full bg-[rgb(241,168,52)]";
    const cardClasses = "relative mt-[25vh] flex h-[70vh] w-[25vw] flex-col items-center justify-center gap-[2vh] rounded-[20px] bg-white";

    const cardH1 = " text-[5vw] mt-[35vh] "
    const cardBtn = " rounded-full bg-[orange] px-[2vw] py-[1vw] text-[1vw] "


</script>

<div id="main" class="w-full h-screen bg-orange-500 ">
    <!-- <nav> -->
     <nav class="fixed flex items-center justify-between w-full h-[10vh] px-[10vw] z-[99]">

        <a href="/" class=" text-orange-900">Logo</a>
        <div class="centrNav flex gap-[3vw]">
            <a href="/home" class=" text-orange-900">Home</a>
            <a href="/contact" class=" text-orange-900">contact</a>
            <a href="/about" class=" text-orange-900">about</a>
        </div>
        <RectangleListSolid class="shrink-0 h-6 w-6 text-white cursor-pointer" />
    </nav>

        <div class="one flex items-center justify-center w-full h-screen bg-[linear-gradient(150deg,rgb(255,132,0),rgb(255,106,0),rgb(255,119,0))] ">

            <h1 class=" font-product-sans-bold text-[25vw] text-white ">FANTA</h1>
            <img src={OrangeSlice} alt="orangeSlice" class="orngSlc absolute top-[10%] left-[32%] w-[15%] z-1 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">
            <img src={Fanta} alt="fanta" class="fanta absolute w-[40%] z-[2] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ">

            <img src={Orange} alt="orange" class="orange absolute w-[20%] z-[3] top-[55%] right-[30%] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ">

            <img src={leaf1} alt="leaf1" class="leaf1 absolute top-[10%] left-0 w-[15%] rotate-[95deg] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ">
            
            <img src={leaf2} alt="leaf2" class="leaf2 absolute top-[70%] left-[80%] h-[25%] w-[20%] rotate-[-90deg] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]  ">

            <img src={coconutLeaf} alt="coconutLeaf" class="coconutLeaf absolute top-[10%] right-[0%] w-[20%]">

        </div>

        <div class="two h-screen w-full flex">
            <div class="two-lft {panelClasses} ">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class=" mt-[50vh] w-[90%] [transform:rotateX(50deg)]  ">
                    <path fill="#e04428" d="M59.7,-35.3C72.6,-12.1,75,16.3,63.3,34.1C51.6,51.8,25.8,59,0.8,58.6C-24.3,58.1,-48.5,50.1,-55.7,35C-62.8,19.8,-52.7,-2.4,-40.6,-25.2C-28.4,-48,-14.2,-71.3,4.6,-74C23.4,-76.6,46.7,-58.6,59.7,-35.3Z" transform="translate(100 100)" />
                </svg>
            </div>
            <div class="two-rght {panelClasses} ">
                <h1 class=" text-[5vw] ">Flavour change</h1>
                <p class=" text-[1vw] text-[whitesmoke] w-4/5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolore placeat nulla similique quasi tempora nostrum vero fuga! Beatae recusandae nemo soluta iure optio ratione veniam tenetur non voluptatem at aperiam ducimus magnam accusamus, quibusdam sapiente nihil eius fuga accusantium minima neque unde. Necessitatibus doloremque cum culpa a laborum vitae illo at ducimus voluptate, praesentium sequi facilis soluta illum, accusamus repellat nulla maiores ut totam perspiciatis. Explicabo sint saepe distinctio numquam hic nihil earum, libero quaerat ut autem dolorum voluptas tempora impedit obcaecati possimus esse veniam aliquid nemo doloribus. Modi hic quas nesciunt quod perferendis esse? Recusandae repudiandae tenetur incidunt.</p>
                
            </div>
        </div>
        <div class=" three flex h-screen w-full items-center justify-center gap-[5vw] bg-[linear-gradient(150deg,rgb(255,132,0),rgb(255,106,0),rgb(255,119,0))] ">

            <Card title="Coc" isLemon={true} imageSrc={coc} imageClass="coc-three absolute -top-[10%] left-1/2 w-[65%] -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] " />

            <Card title="Fanta" isLemon={false} imageSrc={straw} imageClass="straw absolute -top-[15%] left-[52%] z-[1] -rotate-[30deg] "/>

            <Card title="Pepsi" isLemon={true} imageSrc={pepsi} imageClass="pepsi-three absolute -top-[13%] left-1/2 h-[70%] w-[70%] -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] "></Card>

        </div>

</div>
