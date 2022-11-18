Splitting();
const section01TL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section01",
    //markers: { fontSize: "20px", indent: 20, startColor: "#fff", endColor: "#f00" },
    start: "top top",
    end: "bottom+=100% top", //bottom으로 속도 조절
    scrub: 1,
    pin: true,
  },
});
section01TL
  .from(".section01 .txt01 .char", { x: 100, opacity: 0, stagger: { each: 0.05 } })
  .from(CSSRulePlugin.getRule(".tsa .section01 .txt01:after"), { cssRule: { scaleX: 0 } })
  .from(".section01 .txt02 .char", { x: 100, opacity: 0, stagger: { each: 0.05 } })
  .from(".section01 .txt0301", { x: 100, opacity: 0 })
  .from(".section01 .txt0302", { x: -100, opacity: 0 })
  .from(".section01 .txt0303", { x: 100, opacity: 0 })
  .from(".section01 .txt04", { scale: 2, opacity: 0 });

const section02TL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section02",
    //markers: { fontSize: "20px", indent: 20, startColor: "#f00", endColor: "#00f" },
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true,
  },
});
section02TL
  .from(".section02 .title", { backgroundColor: "transparent" })
  .from(".section02 .title .char", { y: -100, opacity: 0, stagger: { each: 0.05 } })
  .from(".section02 .mainTxt01", { x: 100, opacity: 0 })
  .from(".section02 .mainTxt02", { x: -100, opacity: 0 })
  .from(".section02 .mainTxt03", { x: 100, opacity: 0 })
  .from(".section02 .circleList li", { x: 100, opacity: 0, stagger: { each: 0.5 } })
  .from(".section02 .cduBox", { scale: 2, opacity: 0 });
//.to(".section02 .cduBox", { opacity: 0 });

const section03TL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section03",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true,
  },
});

section03TL
  .from(".section03 .title", { backgroundColor: "transparent" })
  .from(".section03 .title .char", { y: -100, opacity: 0, stagger: { each: 0.05 } })
  .from(".section03 .mainTxt .char", { x: 100, opacity: 0, duration: 2, stagger: { each: 0.05 } })
  .from(".section03 .list li ", { x: 100, opacity: 0, stagger: { each: 0.05 } })
  .from(".section03 .airplane", { y: 100, x: -100, duration: 2, opacity: 0 });

const section04TL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section04",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true,
  },
});

section04TL
  .from(".section04 .title", { backgroundColor: "transparent" })
  .from(".section04 .title .char", { y: -100, opacity: 0, stagger: { each: 0.05 } })
  .from(".section04 .mainTxt .char", { x: 100, opacity: 0, duration: 2, stagger: { each: 0.05 } })
  .from(".section04 .list li ", { scale: 0, opacity: 0, stagger: { each: 0.5 } });

const section05TL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section05",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true,
  },
});

section05TL
  .from(".section05 .title", { backgroundColor: "transparent" })
  .from(".section05 .title .char", { y: -100, opacity: 0, stagger: { each: 0.05 } })
  .from(".section05 .mainTxt01 .char", { x: 100, opacity: 0 })
  .from(".section05 .mainTxt02 .char", { x: -100, opacity: 0 })
  .from(".section05 .mainTxt03 .char", { x: 100, opacity: 0 })
  .from(".section05 .list li ", { scale: 0, opacity: 0, stagger: { each: 0.5 } });

const section06TL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section06",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true,
  },
});

section06TL
  .from(".section06 .mainTxt .char", { x: 100, opacity: 0, stagger: { each: 0.05 } })
  .from(".section06 .subTxt .char", { x: 100, opacity: 0, stagger: { each: 0.05 } })
  .from(".section06 .txtDash .char", { x: 100, opacity: 0, stagger: { each: 0.05 } })
  .from(".section06 .img", { scale: 2, opacity: 0 })
  .from(".section06 .shortcut .char", { x: 100, opacity: 0, stagger: { each: 0.05 } })
  .from(".section06 .btns a ", { scale: 0, opacity: 0, stagger: { each: 0.5 } });
