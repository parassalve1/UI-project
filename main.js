// making cursor

function cursor(){
    let cursor = document.querySelector('.cursor');
    let body = document.querySelector('body');
    body.addEventListener("mousemove", (e) => {
        gsap.to(cursor,{
            x: e.x + "px",
            y: e.y + "px",
           
        })
    })

}
cursor()


function section1(){
    let tl = gsap.timeline();
    let cursor = document.querySelector('.cursor');
    let section1 = document.querySelector('.section-1');

    section1.addEventListener("mouseenter",()=>{
        gsap.to(cursor,{
            background:"red",
            border:"1px solid yellow"
        })
    })

    tl.from(".header",{
        y:-50,
        opacity:0,
        duration:1,
    });

    tl.from(".text-content .head h1 ",{
        y: 100,
        opacity: 0,
        duration: 1,
    });
    tl.from(".text-content .head p",{
        y: 100,
        opacity: 0,
        duration: 1.1,
    });

    tl.from(".text-content .head span ",{
        opacity:0,
        duration:3,
    })

}
section1()

function section2(){
    let section2 = document.querySelector('.section-2');
    let cursor = document.querySelector('.cursor');
    let body = document.querySelector('body');

    section2.addEventListener("mouseenter",() =>{
        gsap.to(cursor,{
            height:"50px",
            width:"50px",
            innerHTML: "<i class='fa-solid fa-volume-high'></i>",
            fontSize:"25px",
            color:'black',
            margin:"20px",
            background:"white",
        })

        gsap.to(body,{
            color:"white",
            background:"black",
        })

    })

    section2.addEventListener("mouseleave",()=>{
        gsap.to(cursor,{
            height:"18px",
            width:"18px",
            
            innerHTML:"",
        })
        gsap.to(body,{
            color:"black",
            background:"white",
        })

    })
}
section2()

function section3(){
    let cursor = document.querySelector(".cursor");
    let section3 = document.querySelector(".section-3");

   section3.addEventListener("mouseenter",()=>{
    gsap.to(cursor,{
        background:"yellow",
        border:"1px solid black"
    })
   })
}
section3()

function section4(){
    let cursor = document.querySelector('.cursor');
    let section4 = document.querySelector('.section-4');
    let slide = document.querySelector('.section-4 .four .projects .first-project .first')

    section4.addEventListener("mouseenter",() => {
        gsap.to(cursor,{
            background:"yellow",
        })

    })

    gsap.to(section4,{
        backgroundColor:"black",
        color:"white",

        scrollTrigger:{
            trigger:".section-4 .four .moving-text",
            start:"bottom center",
            end:"bottom center",
            scrub:2,
            // markers: true,
        }
    })

    gsap.to(".servies",{
        color:"white",
        scrollTrigger:{
            trigger:".section-4 .four .moving-text",
            start:"bottom center",
            end:"bottom center",
            scrub:2,
            // markers: true,
        }

    })

  section4.addEventListener("mouseenter",()=>{
    gsap.to(cursor,{
        height:'100px',
        width:"100px",
        fontSize:"15px",
        duration:0.01,
        innerHTML:"<p>See Projects!</p>",
        margin:"20px",
        background:"white",

        scrollTrigger:{
            trigger:".section-4 .four .moving-text",
            start:"bottom center",
            end:"bottom center",
            scrub:1,
            // markers: true,
        }

    })


  })

  slide.addEventListener("mouseenter",()=>{
    gsap.to('.section-4 .four .projects .first-project .first .about',{
        left:"63vw",
        opacity:1,
        duration:5,

        scrollTrigger:{
            trigger:".section-4 .four .projects .first-project",
            start:"top center",
            end:"top center",
            scrub:1,
        }
    })
  })

  slide.addEventListener("mouseleave",()=>{
    gsap.to('.section-4 .four .projects .first-project .first .about',{
        left:"0vw",
        opacity:0,
        duration:5,

        scrollTrigger:{
            trigger:".section-4 .four .projects .first-project",
            start:"top left",
            end:"top left",
            scrub:1,
        }
    })
  })

  let parentE1 = document.querySelector(".bg");
  let childE1 = document.querySelector(".first-project .first")

  childE1.forEach((Item) => {
    Item.addEventListener("mouseenter",() =>{
        let ids = Item.getAttribute("data-id");
        let bgE1 = document.querySelector(`.id-${ids}`);


        parentE1.querySelectorAll('video').forEach((video)=>{
                video.style.display = "none";
        });

        bgE1.style.display = "block";


        gsap.to(cursor,{
            height:'100px',
            width:"100px",
            fontSize:"15px",
            duration:0.1,
            innerHTML:"<p>See Projects!</p>",
            margin:"20px"
        });
    });
    
  });

  Item.addEventListener("mouseleave",() =>{
    let ids = Item.getAttribute("data-id");
    let bgE1 = document.querySelector(`.id-${ids}`);


    parentE1.querySelectorAll('video').forEach((video)=>{
            video.style.display = "none";
    });

    bgE1.style.display = "none";


    gsap.to(cursor,{
        height:'18px',
        width:"18px",
        duration:0.1,
       innerHTML:"",
        margin:0,
        background:"red",
    });
});





};
section4();



function section5(){
    let sectionfive = document.querySelector(".section-5");
    let cursor = document.querySelector(".cursor");

    sectionfive.addEventListener("mouseenter",()=>{
        gsap.to(cursor,{
            background:"#0f0f0f",
            duration:3,
        })
    })

    gsap.from(".section-5 .five .left h1, .section-5 .five .left h5", {
        y:100,
        opacity:1,
        duration:3,
        stagger:1,
        scrollTrigger:{
            trigger:".section-5 .five",
            start:"top 60%",
            end:"top 30%",
            scrub:1,
        }
    })
}
section5();
