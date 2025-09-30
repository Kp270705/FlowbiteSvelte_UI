<script>
    import lemon from "../assets/icons/lemon.webp";

    export let title;
    export let imageSrc;
    export let imageAlt = '';
    export let isLemon;
    // You can even pass a special class for the image
    export let imageClass = '';

    const cardLemon = " absolute -top-[32%] w-[85%] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] "
    const cardClasses = "relative mt-[25vh] flex h-[70vh] w-[25vw] flex-col items-center justify-center gap-[2vh] rounded-[20px] bg-white";
    const cardH1 = "text-[5vw] mt-[35vh]";
    const cardBtn = "rounded-full bg-[orange] px-[2vw] py-[1vw] text-[1vw]";
</script>

<div class={cardClasses}>
    {#if isLemon}
        <img src={lemon} alt="lemon" class=" lemon {cardLemon} " >
    {/if}  
    <slot />
    <img src={imageSrc} alt={imageAlt} class={imageClass} />
    <h1 class={cardH1}>{title}</h1>
    <button class="btn {cardBtn}">Buy now</button>

</div>