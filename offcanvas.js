$(function() {

    gsap.registerPlugin(ScrollTrigger);

    var btn = $("#dark-btn");


    var btnDarkOutline = $(".btn-outline-dark");

    var isDark = false;


    // $("#menu-btn").on("click", function() {
    //   $("#menu").addClass("open")
    // });

    // $("#menu-chiuso-btn").on("click", function(){
    //   $("#menu").removeClass("open")
    // })

    btn.on("click", function() {
        // Quando viene cliccato il pulsante dark btn.
        isDark = !isDark;

        if (isDark) {
            btn.text("LIGHT SIDE")
        } else {
            btn.text("DARK SIDE")
        }


        $("body").toggleClass("dark");

        btn.toggleClass("btn-dark btn-light");
        btnDarkOutline.toggleClass("btn-outline-dark btn-outline-light");



    });


    gsap.to(".torta", {
        repeat: -1,
        duration: 8,
        rotation: 360,
        ease: Linear.easeNone
    });

    gsap.to(".scroll", {
        repeat: -1,
        duration: 8,
        rotation: 360,
        ease: Linear.easeNone
    });

    var tl = gsap.timeline()
        .to(".torta", { scale: 1, opacity: 1, duration: 2, ease: Sine.easeOut, startAt: { scale: 2 } })
        .to(".trama", { y: 0, opacity: 1, duration: 1, delay: -1, startAt: { y: 100 } })
        .to(".scroll", { y: 0, opacity: 1, duration: 1, ease: Sine.easeOut, startAt: { y: 100 } });


    gsap.to(".torta-post", {
        y: 0,
        opacity: 1,
        duration: 1.5,
        startAt: { y: 100 },
        scrollTrigger: {
            trigger: "#section2 h2",


            toggleActions: "restart none none reset"
        },
    });

    gsap.to("#torta-che-gira", {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
            trigger: "#section2",
            start: 'top top',
            toggleActions: "restart none none reset"
        }
    });

    gsap.to("#torta-che-gira", {
        duration: 5,
        rotation: 360,
        ease: Linear.easeNone,
        scrollTrigger: {
            trigger: "body",
            start: 'top top',
            scrub: true,
        }
    });

    var toggleActionsIngredienti = "restart none reverse reset";

    gsap.to("#ing-cacao", {
        x: 0,
        opacity: 1,
        duration: 2,
        startAt: { x: -100 },
        scrollTrigger: {
            trigger: "#ing-cacao",
            start: "top 80%",
            toggleActions: toggleActionsIngredienti,
            scrub: true,
        },
    });

    gsap.to("#ing-latteriso", {
        x: 0,
        opacity: 1,
        duration: 2,
        startAt: { x: -100 },
        scrollTrigger: {
            trigger: "#ing-latteriso",
            start: "top 90%",
            toggleActions: toggleActionsIngredienti,
            scrub: true,
        },
    });

    gsap.to("#ing-fiocchi", {
        x: 0,
        opacity: 1,
        duration: 2,
        startAt: { x: 100 },
        scrollTrigger: {
            trigger: "#ing-cacao",
            start: "top 80%",
            toggleActions: toggleActionsIngredienti,
            scrub: true,
        },
    });

    gsap.to("#ing-zucchero", {
        x: 0,
        opacity: 1,
        duration: 2,
        startAt: { x: 100 },
        scrollTrigger: {
            trigger: "#ing-latteriso",
            start: "top 90%",
            toggleActions: toggleActionsIngredienti,
            scrub: true,
        },
    });

    gsap.to("#ing-cioccolato", {
        y: 0,
        opacity: 1,
        duration: 2,
        startAt: { y: 100 },
        scrollTrigger: {
            trigger: "#ing-cioccolato",
            start: "top 80%",
            toggleActions: toggleActionsIngredienti,
            scrub: true,
        },
    });

    gsap.to("#ing-sale", {
        y: 0,
        opacity: 1,
        duration: 2,
        startAt: { y: 100 },
        scrollTrigger: {
            trigger: "#ing-sale",
            start: "top 90%",
            toggleActions: toggleActionsIngredienti,
            scrub: true,
        },
    });

    gsap.to("#ing-farina", {
        y: 0,
        opacity: 1,
        duration: 2,
        startAt: { y: 100 },
        scrollTrigger: {
            trigger: "#ing-farina",
            start: "top 90%",
            toggleActions: toggleActionsIngredienti,
            scrub: true,
        },
    });

    gsap.to("#tortasacher", {
        scale: 1,
        opacity: 1,
        duration: 2,
        delay: 0.2,
        ease: Sine.easeOut,
        startAt: { scale: 1.1 },
        scrollTrigger: {
            trigger: "#section5",

            toggleActions: "restart none none reset"
        },
    });

    gsap.to("#section5 .info-img", {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: -1,
        startAt: { y: 100 },
        scrollTrigger: {
            trigger: "#section5",

            toggleActions: "restart none none reset"
        },
    });

    var ySpostamento = 50;

    gsap.timeline({ repeat: -1 })
        .to("#cit-1", {
            startAt: { y: ySpostamento },
            y: 0,
            opacity: 1,
        })
        .to("#cit-1", {
            y: -ySpostamento,
            delay: 5,
            opacity: 0,
        })
        .to("#cit-2", {
            startAt: { y: ySpostamento },
            y: 0,
            opacity: 1,
        })
        .to("#cit-2", {
            y: -ySpostamento,
            delay: 5,
            opacity: 0,
        })
        .to("#cit-3", {
            startAt: { y: ySpostamento },
            y: 0,
            opacity: 1,
        })
        .to("#cit-3", {
            y: -ySpostamento,
            delay: 5,
            opacity: 0,
        })

});