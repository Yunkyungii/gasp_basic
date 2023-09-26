const pages = gsap.utils.toArray('#hscroll .page');
console.log(pages);

const MAIN = gsap.to(pages, {
    xPercent: -100 * (pages.length - 1),
    scrollTrigger: {
        trigger: '#hscroll',
        //start: "top top",
        end: '+=3500',
        scrub: true,
        pin: true,
        markers: true,
        // snap: 1 / (pages.length - 1),
        //   snap: { //공간 단위로 스냅이 붙는다.
        //  snapTo: 1 / (pages.length - 1),
        //  inertia: true,
        //duration: { min: 1, max: 1 }
        //  }

    }

});

const itm = gsap.utils.toArray('#hscroll .move');
console.log(itm);

itm.forEach((it, idx) => {

    gsap.to(it, {
        y: 500,
        scrollTrigger: {
            trigger: it,
            markers: true,
            start: 'center 1500px',
            //  end: 'center 200px',
            containerAnimation: MAIN,
        }

    })
})

