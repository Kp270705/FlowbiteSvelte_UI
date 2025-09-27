import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

class TextAnimation {
  constructor(attr1, attr2) {
    this.attr1 = attr1;
    this.attr2 = attr2;
  }

    textSlideRight() {
    gsap.from(`${this.attr1} ${this.attr2}`, {
      delay: 1,
      opacity: 0,
      duration: 1,
      x: -1000,
      scrollTrigger: {
        trigger: `${this.attr1} ${this.attr2}`,
        scroller: "#app-content-scroller",
        // markers: true,
        start: "top 60%",
        end: "top 70%",
        scrub: 2,
      }
    })
  }

  textSlideLeft() {
    gsap.from(`${this.attr1} ${this.attr2}`, {
      delay: 1,
      opacity: 0,
      duration: 1,
      x: 1000,
      scrollTrigger: {
        trigger: `${this.attr1} ${this.attr2}`,
        scroller: "#app-content-scroller",
        // markers: true,
        start: "top 60%",
        end: "top 70%",
        scrub: 2,
    }
})
}

textSlideDown(){
    gsap.from(`${this.attr1} ${this.attr2}`,{
        delay:1,
        opacity:0,
        duration:2,
        y:-500,
        scrollTrigger:{
            trigger:`${this.attr1} ${this.attr2}`,
            scroller:"#app-content-scroller",
            // markers:true,
            start:"top 90%",
            end: "top 10%",
            scrub:2,
      }
    })
  }

}



export default TextAnimation;