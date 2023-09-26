// window.addEventListener('DOMContentLoaded', function () {})

const M = gsap.to('.box', {
    scrollTrigger: {
        trigger: '.test',
        start: 'top center', //앞에꺼 start, 뒤에꺼는 scroller-start
        markers: true,
        scrub: true,
        pin: true,
    },
    x: 150,
    y: 500,
    rotation: 720,
});


const LE = gsap.from('.left', {
    scrollTrigger: {
        trigger: '.test2',
        start: 'center center',
        markers: true,
        scrub: 1,
        pin: true,
    },
    x: -500,
    opacity: 0
});

// const LNK = document.querySelector('.gnb a');

// LNK.addEventListener('click', function (e) {
//     e.preventDefault();
//     const L = e.target.hash;
//     console.log(L)

//     gsap.to(window, {
//         scrollTo: { y: L, offsetY: 100 },
//     })
// })

const LINK = document.querySelectorAll('.gnb a');
const LINK2 = gsap.utils.toArray('.gnb a');
const NUM = document.querySelector('.num');
console.log(LINK, LINK2);



//  똑같음 function(){} , ()=>{}
LINK.forEach((it, idx, arry) => {
    it.addEventListener('click', (e) => {
        e.preventDefault();
        const TG = e.target.hash;
        console.log(TG);
        gsap.to(window, {
            scrollTo: { y: TG, offsetY: 100 },
            duration: 2,
            ease: "bounce.out",
        });

        NUM.innerHTML = idx;
    })
})