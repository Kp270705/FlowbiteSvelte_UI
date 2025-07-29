<script>
  import Accordion from "./components/Accordion.svelte";
  import Avatar from "./components/Avatar.svelte";
  import Buttons from "./components/Buttons.svelte";
  import Card from "./components/Card.svelte";
  import { eComData } from "./jsContent/cardContent.js";
  
  // import static files:
  import Boy1 from "./assets/icons/boy1.png";
  import Girl1 from "./assets/icons/girl1.png";
  import Police from "./assets/icons/police1.png";
  import Kid1 from "./assets/icons/kid1.jpg";

  let iconSrc = {
    boy1: Boy1,
    girl1: Girl1,
    police: Police,
    kid1: Kid1
  }
  
  // import json content:
  let cardContent = eComData;

  // function logics:
  function handleButtonClick() {
    alert("button clicked!");
  }
  

</script>

<br>
<hr>
<br>
<h1>Accordion Section</h1>
<Accordion />
<br>
<hr>
<br>
<h1>Avatar Section</h1>
<Avatar src={iconSrc} />
<br>
<hr>
<br>
<h1>Buttons section</h1>
<Buttons onClick={handleButtonClick} />
<br>
<hr>
<br>
<h1>Card section</h1>

<div class="flex flex-wrap gap-4">

  {#each cardContent as item}
    <Card img={item.img} title={item.title} rating={item.rating} price={item.price} />
  {/each}

</div>



