<script>
    import { RectangleListSolid } from "flowbite-svelte-icons";
    // import Fanta from "./assets/icons/fanta1.png"
    import Fanta from "./assets/icons/f3.png"
    import OrangeSlice from "./assets/icons/orngslc.png"
    import Orange from "./assets/icons/orange1.png"
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
        <img src={OrangeSlice} alt="orangeSlice" class="orngSlc ">
        <img src={Fanta} alt="fanta" class="fanta ">
        <img src={Orange} alt="orange" class="orange ">
        <!-- content -->
    </div>
</div>

<style>
    #main {
        height: 100vh;
        width: 100%;
        background-color: orangered;
        border: 5px solid blue;
        overflow-y: auto; /* important so sticky works */
    }

    nav {
        position: sticky; /* container-based fix */
        top: 0%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0vw 1vw;
        border: 5px solid green;
        height: 10vh;
        z-index: 10;
    }

    nav a {
        color: azure;
    }

    .centrNav {
        display: flex;
        gap: 3vw;
        font-size: large;
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
        width: 40%;
        z-index: 2;
    }
    .orngSlc{
        width: 20%;
        position: absolute;
        z-index: 1;
        height: 40%;
        left: 40%;
        top: 20%;
    }
    .orange{
        position: absolute;
        width: 15%;
        top: 70%;
        left: 55%;
        z-index: 3;

    }
</style>
