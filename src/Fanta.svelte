<script>
    import { RectangleListSolid } from "flowbite-svelte-icons";
    // import Fanta from "./assets/icons/fanta1.png"
    import Fanta from "./assets/icons/f3.png"
    import coc from "./assets/icons/coc.png"
    import pepsi from "./assets/icons/pepsi.png"
    import OrangeSlice from "./assets/icons/orngslc.png"
    import Orange from "./assets/icons/orange1.png"
    import leaf1 from "./assets/icons/leaf1.png"
    import leaf2 from "./assets/icons/leaf2.png"
    import coconutLeaf from "./assets/icons/coconutLeaf1.png"
</script>

<div id="main">
    <nav>
        <a href="/">Logo</a>
        <div class="centrNav">
            <a href="/home">Home</a>
            <a href="/contact">contact</a>
            <a href="/about">about</a>
        </div>
        <RectangleListSolid class="shrink-0 h-6 w-6 text-white cursor-pointer" />
    </nav>

    <div class="one">
        <h1>FANTA</h1>
        <img src={OrangeSlice} alt="orangeSlice" class="orngSlc ">
        <img src={Fanta} alt="fanta" class="fanta ">
        <img src={Orange} alt="orange" class="orange ">
        <img src={leaf1} alt="leaf1" class="leaf1 ">
        <img src={leaf2} alt="leaf2" class="leaf2 ">
        <img src={coconutLeaf} alt="coconutLeaf" class="coconutLeaf ">
    </div>
    <div class="two">
        <div class="two-lft">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#e04428" d="M59.7,-35.3C72.6,-12.1,75,16.3,63.3,34.1C51.6,51.8,25.8,59,0.8,58.6C-24.3,58.1,-48.5,50.1,-55.7,35C-62.8,19.8,-52.7,-2.4,-40.6,-25.2C-28.4,-48,-14.2,-71.3,4.6,-74C23.4,-76.6,46.7,-58.6,59.7,-35.3Z" transform="translate(100 100)" />
            </svg>
        </div>
        <div class="two-rght">
            <h1 class=" ">Flavour change</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolore placeat nulla similique quasi tempora nostrum vero fuga! Beatae recusandae nemo soluta iure optio ratione veniam tenetur non voluptatem at aperiam ducimus magnam accusamus, quibusdam sapiente nihil eius fuga accusantium minima neque unde. Necessitatibus doloremque cum culpa a laborum vitae illo at ducimus voluptate, praesentium sequi facilis soluta illum, accusamus repellat nulla maiores ut totam perspiciatis. Explicabo sint saepe distinctio numquam hic nihil earum, libero quaerat ut autem dolorum voluptas tempora impedit obcaecati possimus esse veniam aliquid nemo doloribus. Modi hic quas nesciunt quod perferendis esse? Recusandae repudiandae tenetur incidunt.</p>
            
        </div>
    </div>
    <div class="three">
        <div class="card ">
            <img src={coc} alt="coc-three" class="coc-three" >
            <h1>Coc</h1>
            <button class="btn" >Buy now</button>
        </div>
        <div class="card ">
            <!-- <img src={Fanta} alt="fanta" class="fanta-three"> -->
            <h1>Fanta</h1>
            <button class="btn" >Buy now</button>
        </div>
        <div class="card ">
            <img src={pepsi} alt="pepsi" class="pepsi-three">
            <h1>Pepsi</h1>
            <button class="btn" >Buy now</button>
        </div>
    </div>
</div>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Product Sans;
    }

    #main{
    width: 100%;
    height: 100vh;
    background-color: orangered;
}

    nav{ 
        position: fixed; 
        display: flex; 
        align-items: center; 
        justify-content: space-between; 
        width: 100%; 
        height: 10vh; 
        padding:0vw 10vw; 
        z-index: 99;
    }

    nav a {
        color: azure;
    }

    .centrNav {
        display: flex;
        gap: 3vw;
        /* font-size: large; */
    }

    .one {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100vh;
        background: linear-gradient(150deg, rgb(255, 132, 0), rgb(255, 106, 0), rgb(255, 119, 0));
    }
    .fanta{
        position: absolute;
        width: 40%;
        z-index: 2;
    }
    .orngSlc{
        position: absolute;
        top: 10%;
        left: 32%;
        width: 15%;
        z-index: 1;
    }
    .orange{
        position: absolute;
        width: 20%;
        z-index: 3;
        top: 55%;
        right: 30%;

    }
    .one h1{
        font-family: Product sans B;
        font-size: 25vw;
        color: #ffffff;
    }

    .two{
        height: 100vh;
        width: 100%;
    }

    .leaf1{
        width: 15%;
        /* height: 25%; */
        top: 10%;
        left: 0%;
        transform: rotate(95deg);
        position: absolute;
    }

    .leaf2{
        top: 70%;
        left: 80%;
        transform: rotate(-90deg);
        width: 20%;
        height: 25%;
        position: absolute;
    }
    .coconutLeaf{
        top: 10%;
        right: 0%;
        width: 20%;
        position: absolute;
    }
    .two{
        display: flex;
        height: 100vh;
        width: 100%;
    }
    .two-lft, .two-rght{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 5vh;
        width: 50%;
        height: 100%;
        background-color: rgb(241, 168, 52);
        /* background-color: rgb(#fa4d56); */
    }
    .two-lft svg{
        margin-top: 50vh;
        width: 90%;
        transform: rotateX(50deg);
    }
    .two-rght h1{
        font-size: 5vw;
    }
    .two-rght p{
        font-size: 1vw;
        color: whitesmoke;
        width: 80%;
    }

    .three{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5vw;
        height: 100vh;
        width: 100%;
        background: linear-gradient(150deg, rgb(255, 132, 0), rgb(255, 106, 0), rgb(255, 119, 0));
    }
    .card{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2vh;
        background-color: #fff;
        height: 70vh;
        width: 25vw;
        border-radius: 20px;
        margin-top: 10vh;
    }
    .card h1{
        font-size: 5vw;
        margin-top: 35vh;
    }
    .card button{
        font-size: 1vw;
        border-radius: 50px;
        padding: 1vw 2vw;
        background-color: orange;

    }
    .coc-three{
        position: absolute;
        width: 15%;
        top: 15%;
    }
    .pepsi-three{
        position: absolute;
        width: 18%;
        top: 15%;
    }


</style>
