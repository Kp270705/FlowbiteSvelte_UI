import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function horizontalScroll(attr1, attr2){
    gsap.to(`${attr1} ${attr2}`, {
        transform:"translateX(-200%)",
        scrollTrigger:{
            trigger:`${attr1}`,
            scroller:"#app-content-scroller",
            markers:true,
            start:"top 0%",
            end:"top -150%",
            scrub:2,
            pin:true,
        }
    })
}


export default horizontalScroll;