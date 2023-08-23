const H1 = document.querySelector('h1 a');

H1.addEventListener('click', e => {
    e.preventDefault();
    gsap.to(window, {
        scrollTo: 0,
        duration: 2,
    })
});


// 배열을 알려줌 [a,a,a,a,a,a]
const NAVLINK = gsap.utils.toArray('.gnb a');

console.log(NAVLINK);

// 배열을 이용해 각각에 적용
NAVLINK.forEach((it, idx) => {
    it.addEventListener('click', (e) => {
        e.preventDefault();
        const TG = e.target.hash;
        gsap.to(window, {
            scrollTo: TG,
            duration: 1,
            ease: 'bounce',
        })
    })
});

const txt = gsap.utils.toArray('#intro h2');

txt.forEach((it, idx, arry) => {
    const a = it.innerText;
    const t = [...a].map(it => `<span>${it}</span>`).join('');

    it.innerHTML = t;
    const chars = it.querySelectorAll('span');

    gsap.from(chars, {
        yPercent: 100, // transfrom 은 block만 먹힌다
        autoAlpha: 0,
        duration: 1,
        //repeat: 3,
        //repeatDelay: 2,
        //yoyo: true,
        ease: "bounce",
        stagger: {
            amount: 1,
            from: "random"
        },
        // scrollTrigger: {
        //     trigger: it,
        //     start: "top center",
        //     //end: "+=400",
        //     toggleActions: "play none play reverse",
        //     markers: 1
        // }
    });
});
const T = document.querySelector('#profile .txt');
const TXT = document.querySelector('#profile .txt').innerText;
console.log([...TXT]);
const STXT = [...TXT].map(it => `<span>${it}</span>`).join('');
console.log(STXT);

T.innerHTML = STXT;
// TXT('#intro h2') 안에 TEXT를 넣는다, join('') => ',' 지우기

const SPAN = T.querySelectorAll('span');

console.log(SPAN);
SPAN.forEach((it, idx) => {
    it.style.cssText = `
    font-size: 24px;
    transform: translate(-50%,0) rotate(${360 / SPAN.length * idx}deg);
    `;
});

gsap.to(T, {
    rotate: 360,
    duration: 10,
    repeat: -1,
    ease: 'linear',
})


// it.style.cssText = `
// color : #f00;
// font-size: ${10 * idx}px;
// `;


