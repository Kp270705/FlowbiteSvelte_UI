import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function horizontalScroll(attr1, attr2){
    // gsap.registerPlugin(ScrollTrigger);
    gsap.to(`${attr1} ${attr2}`, {
        transform:"translateX(-150%)",
        scrollTrigger:{
            trigger:`${attr1}`,
            scroller:"body",
            markers:true,
            start:"top 0%",
            end:"top -150%",
            scrub:2,
            pin:true,
        }
    })
}


export default horizontalScroll;