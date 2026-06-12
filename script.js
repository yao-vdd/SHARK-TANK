// Animação ao aparecer na tela

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.15
});

const hiddenElements = document.querySelectorAll(
`
.card,
.benefit-box,
.review,
.screen-box,
.about,
.features,
.benefits,
.screenshots,
.cta
`
);

hiddenElements.forEach((el)=>{
    el.classList.add("hidden");
    observer.observe(el);
});


// Efeito de brilho nos cards

const cards = document.querySelectorAll(".card");

cards.forEach((card)=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background =
        `
        radial-gradient(
        circle at ${x}px ${y}px,
        rgba(139,92,246,.25),
        rgba(255,255,255,.05)
        )
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background =
        "rgba(255,255,255,.05)";

    });

});


// Botões

const buttons = document.querySelectorAll(
".primary-btn,.btn-nav"
);

buttons.forEach((btn)=>{

    btn.addEventListener("click",()=>{

        alert(
            "🚀 Obrigado pelo interesse no ReaderIA! Em breve você poderá testar o aplicativo."
        );

    });

});


// Contador animado

function animateCounter(element,target){

    let count = 0;

    const increment = target / 100;

    const update = ()=>{

        if(count < target){

            count += increment;

            element.innerText =
            Math.floor(count);

            requestAnimationFrame(update);

        }else{

            element.innerText = target;

        }

    };

    update();
}


// Efeito no título principal

const title = document.querySelector(".hero h1");

window.addEventListener("mousemove",(e)=>{

    const x =
    (window.innerWidth / 2 - e.pageX) / 50;

    const y =
    (window.innerHeight / 2 - e.pageY) / 50;

    title.style.transform =
    `translate(${x}px, ${y}px)`;

});


// Scroll suave para links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior:"smooth"
        });

    });

});