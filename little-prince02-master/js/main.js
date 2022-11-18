Splitting();
gsap.defaults({ ease: "power4", duration: 1 });

const mySkill = { myHtml: 90, myCss: 95, myJs: 88 };

// const myMarkers = {
//   fontsize: "20px",
//   indent: 50,
//   startColor: "#000",
//   endColor: "#f00",
// };
const myMarkers = null;

// gsap.from(mySkill, {
//   myHtml: 0,
//   duration: 3,
//   onUpdate: function () {
//     console.log(Math.round(mySkill.myHtml));
//   },
// });

const mainvisualTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#mainVisual",
    markers: myMarkers,
    start: "top center",
    end: "bottom top",
  },
});

mainvisualTL
  .from("#mainVisual .rose01", { scale: 0, opacity: 0 })
  .from("#mainVisual .title .char", { x: 100, opacity: 0, stagger: { each: 0.05 } })
  .from("#mainVisual .subTitle .char", {
    opacity: 0,
    x: 100,
    stagger: { each: 0.05 },
  })
  .from("#mainVisual .rose02", { scale: 0, opacity: 0 });

const introduceTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#introduce",
    markers: myMarkers,
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 2,
  },
});
introduceTL
  .from("#introduce .main p .char", { y: -100, opacity: 0, stagger: { each: 0.05 } })
  .from("#introduce .main strong .char", { y: -200, opacity: 0, stagger: { each: 0.05 } })
  .from(CSSRulePlugin.getRule("#main #introduce .main strong:before"), { cssRule: { scaleX: 0 } })
  .from("#introduce .sub .char", { x: 100, opacity: 0, stagger: { each: 0.05 } })
  .from("#introduce .prince", { x: 100, opacity: 0, stagger: { each: 0.05 } });

const introduce02TL = gsap.timeline({
  scrollTrigger: {
    trigger: "#introduce02",
    markers: myMarkers,
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 2,
  },
});
introduce02TL
  .from("#introduce02 .me .char", { x: 200, opacity: 0, stagger: { each: 0.05 } })

  .from(CSSRulePlugin.getRule("#main #introduce02 .me strong:before"), { cssRule: { scaleX: 0 } })
  .to("#introduce02 .door .door-in", { rotationY: -45 });

const portfolioTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#portfolio",
    markers: myMarkers,
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 2,
  },
});
portfolioTL
  .from("#portfolio .main .char", { x: 200, opacity: 0, stagger: { each: 0.05 } })
  .from(CSSRulePlugin.getRule("#main #portfolio .main strong:before"), { cssRule: { scaleX: 0 } })
  .from("#portfolio .no", { opacity: 0 })
  .from("#portfolio .sub .char", { opacity: 0, x: 100, stagger: { each: 0.05 } })
  .from("#portfolio .prince", { opacity: 0 });

const portfolioListTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#portfolioList",
    markers: myMarkers,
    start: "top-=100 top",
    end: "bottom top",
    pin: true,
    scrub: 2,
  },
});
portfolioListTL
  .from("#portfolioList h2 .char", { x: 200, opacity: 0, stagger: { each: 0.05 } })

  .from("#portfolioList .no", { opacity: 0 })
  .from("#portfolioList .subTitle .char", { opacity: 0, x: 200, stagger: { each: 0.05 } })
  .from("#portfolioList .linkList li", { scale: 0, stagger: { each: 0.05 } });

const roseTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#rose",
    markers: myMarkers,
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 2,
  },
});
roseTL
  .from("#rose .main .char", { x: 200, opacity: 0, stagger: { each: 0.05 } })
  .from(CSSRulePlugin.getRule("#main #rose .txtContents p strong::before"), { cssRule: { scaleX: 0 } })

  .from("#rose .no", { opacity: 0 })
  .from("#rose .sub .char", { opacity: 0, x: 200, stagger: { each: 0.05 } })
  .from("#rose .prince", { opacity: 0 });

const skillTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#skill",
    markers: myMarkers,
    start: "top-=100 top",
    end: "bottom top",
    pin: true,
    scrub: 2,
  },
});
skillTL
  .from("#skill h2 .char", { x: 200, opacity: 0, stagger: { each: 0.05 } })

  .from("#skill .no", { opacity: 0 })
  .from("#skill .subTitle .char", { opacity: 0, x: 200, stagger: { each: 0.05 } })
  .from("#skill .skillBox li", { y: 150, opacity: 0, stagger: { each: 0.05 } })
  .from(mySkill, {
    myHtml: 0,
    myCss: 0,
    myJs: 0,
    duration: 3,
    onUpdate: function () {
      //console.log(Math.round(mySkill.myHtml));
      $("#skill li:nth-child(1) .num .txt").text(Math.round(mySkill.myHtml));
      $("#skill li:nth-child(2) .num .txt").text(Math.round(mySkill.myCss));
      $("#skill li:nth-child(3) .num .txt").text(Math.round(mySkill.myJs));
    },
  });

// const contact = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#contact",
//     markers: myMarkers,
//     start: "top-=100 top",
//     end: "bottom top",
//     pin: true,
//     scrub: 2,
//   },
// });
// contactTL
//   .from("#contact .main p .char", { x: 200, opacity: 0, stagger: { each: 0.05 } })

//   .from("#portfolioList .no", { opacity: 0 })
//   .from("#portfolioList .subTitle .char", { opacity: 0, x: 200, stagger: { each: 0.05 } })
//   .from("#portfolioList .linkList li", { scale: 0, stagger: { each: 0.05 } });

if (Cookies.get("oneday") !== "ok") {
  console.log("쿠키없음");
  gsap.to(".popup", { top: 100, duration: 1, ease: "back" });
} else {
  $(".popup").remove(); //쿠키 제거
}

$(".popup .btn-close").on("click", function () {
  gsap.to(".popup", { top: -1000, ease: "back.in", duration: 1 });
});

$(".popup .btn-oneday").on("click", function () {
  Cookies.set("oneday", "ok", { expires: 1 });
  gsap.to(".popup", { top: -1000, ease: "back.in", duration: 1 });
});

$(".btn-send").on("click", function () {
  emailjs.init("ELu-HVnskoNWIbqzj");
  const templateParams = {
    sendname: $("#name").val(),
    tel: $("#phone").val(),
    email: $("#email").val(),
    contents: $("#contents").val(),
  };

  emailjs.send("service_sflr2p3", "template_u45okag", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      $(".message-box").addClass("on");
      $(".message-box .txt").text("메일이 발송 되었습니다");
      $("#name").val("");
      $("#email").val("");
      $("#phone").val("");
      $("#contents").val("");
    },
    function (error) {
      console.log("FAILED...", error);
      $(".message-box").addClass("on");
      $(".message-box .txt").text("알수없는 오류로 메일이 발송되지 않았습니다");
    }
  );
});

$(".message-box .btn-close").on("click", function () {
  $(".message-box").removeClass("on");
});
