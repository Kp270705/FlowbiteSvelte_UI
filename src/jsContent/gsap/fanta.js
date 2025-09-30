import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

class animateFanta{
    constructor(attr1) {
    this.attr1 = attr1;
  }
  timeLine(params) {
    var tl = gsap.timeline({scrollTrigger:{
        trigger:`${this.attr1.frame2}`,
        start:"0% 95%",
        end:"70% 50%",
        scrub:true,
        markers:true,
    }})
    
    tl.to(this.attr1.fanta,{
        top:"120%",
        left:"0%"
    }, "orange")
    tl.to(this.attr1.orangeSlc,{
        top:"160%",
        left:"22%",
    }, "orange")
    tl.to(this.attr1.orange,{
        top:"165%",
        width:"15%",
        right:"0%",
    }, "orange")

    tl.to(this.attr1.leaf_1,{
        top:"110%",
        width:"15%",
        left:"80%",
        rotate:"-70deg",
    }, "orange")
    tl.to(this.attr1.leaf_2,{
        top:"110%",
        width:"15%",
        left:"0%",
        rotate:"20deg",
    }, "orange")

    var tl2 = gsap.timeline({scrollTrigger:{
        trigger:`${this.attr1.frame3}`,
        start:"0% 95%",
        end:"50% 50%",
        scrub:true,
        markers:true,
    }})

    tl2.to(this.attr1.fanta,{
        top:"222%",
        height:"45%",
        width:"35%",
        left:"32.5%"
    }, "orange")
    tl2.to(this.attr1.orangeSlc,{
        top:"210%",
        left:"42%",
    }, "orange")

    tl2.to(this.attr1.straw,{
        top:"-25%",
        left:"20%",
        height:"60%",
        scrollTrigger:{
            trigger:this.attr1.straw,
            toggleActions: "restart pause reverse pause"
        }
    }, "orange")

  }
}

export default animateFanta