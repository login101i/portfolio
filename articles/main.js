let options={
    threshold:1
}

const observer= new IntersectionObserver(imageObserver, options)

function imageObserver (entries, imgObserverek){
entries.forEach(entry=>{
    if(entry.isIntersecting){
        const img=entry.target
        const img_src=img.dataset.src
        console.log("lazy loading ", img)
        img.src=img_src
        observer.unobserve(img)
    }
})
}


let imgs=document.querySelectorAll('img.lazy')
imgs.forEach(img=>{
    observer.observe(img)
})


// animation
/* =================

author: Maciej Kruszyniak
email: maciejkruszyniak@gmail.com
website: mckrus.pl
  
================= */


const colors = document.querySelectorAll('.transition li')
const iconsFirstLine = document.querySelector('.icons-first-line img')


// color Generator
function generateHex() {
    const letters = '34567DEF'
    let hash = "#"
    let code
    for (let i = 0; i < 6; i++) {
        hash += letters[Math.floor(Math.random() * 8)]
    }

    return hash


}
console.log(generateHex())



colors.forEach(color => {
    const colorHash = generateHex()
    color.style.backgroundColor = colorHash
    console.log(colorHash)
})

function pageTransition() {
    var tl = gsap.timeline();


    tl.to('ul.transition li', {
        duration: 0.6,
        scaleY: 1,
        transformOrigin: "bottom left",
        stagger: 0.1
    })
    tl.to('ul.transition li', {
        duration: 0.6,
        scaleY: 0,
        transformOrigin: "bottom left",
        stagger: 0.1,
        delay: 0.6
    })

}

function contentAnimation() {
    var tl = gsap.timeline()
    // tl.from('.left', {
    //     duration: 1.5,
    //     translateY: 50,
    //     opacity: 0
    // })
    // tl.to('img', {
    //     duration: 0.5,
    //     clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
    // }, "1.1")

}

function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    })
}


barba.init({
    sync: true,

    transitions: [{
        async leave(data) {
            const done = this.async();

            pageTransition();
            await delay(1200)
            done()
        },

        async enter(data) {
            contentAnimation()
        },
        async once(data) {
            contentAnimation()
        }
    }]
})